<template>
  <div class="xl:flex justify-between align-center items-center mb-8">
    <my-title class="mb-8 xl:mb-0">Все кросовки</my-title>
    <div class="flex flex-col lg:flex-row">
      <my-select
        v-model="filters.sortBy"
        :sortOptions="sortOptions"
        class="order-2 lg:order-none"
      />
      <my-input
        @input="onChangeSearchInput"
        placeholder="Поиск..."
        class="card-list__search order-1 lg:order-none mb-8 lg:mb-0"
      >
        <img src="/search.svg" alt="search" class="absolute left-4 top-5" />
      </my-input>
    </div>
  </div>
  <banner-component></banner-component>
  <card-list
    :cards="cards"
    :isLoadCards="isLoadCards"
    @toggleFavorite="toggleFavorite"
    @toggleItemCart="toggleItemCart"
  />
</template>

<script setup>
import { reactive, watch, onMounted, inject } from "vue";
import debounce from "lodash.debounce";

import CardList from "@/components/CardList";
import BannerComponent from "@/components/BannerComponent";

import { useCards, isLoadCards } from "@/hooks/useCards";
import { useFavorites } from "@/hooks/useFavorites";
import { useToggleFavorites } from "@/hooks/useToggleFavorites";

import { sortOptions } from "@/const";

const filters = reactive({
  sortBy: "",
  searchQuery: "",
});

const { cartItems, toggleItemCart } = inject("cart");

const onChangeSearchInput = debounce((e) => {
  filters.searchQuery = e.target.value;
}, 300);

const filterItemsFavorite = () => {
  cards.value = cards.value.map((card) => {
    const favorite = favorites.value.find(
      (favorite) => favorite.id === card.id
    );

    if (!favorite) {
      return card;
    }

    return {
      ...card,
      isFavorite: true,
      favoriteId: favorite.id,
    };
  });
};

const filterItemsAdded = () => {
  cards.value = cards.value.map((card) => {
    return {
      ...card,
      isAdded: cartItems.value.some((item) => item.id === card.id),
    };
  });
};

const { cards } = useCards(filters, filterItemsAdded);
const { favorites } = useFavorites(filterItemsFavorite);
const { toggleFavorite } = useToggleFavorites();

watch(cartItems, () => {
  filterItemsAdded();
});

watch(favorites, filterItemsFavorite);

onMounted(() => {
  filterItemsFavorite();
});
</script>
