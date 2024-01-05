<template>
  <div class="flex justify-between align-center items-center mb-8">
    <my-title>Все кросовки</my-title>
    <div class="flex">
      <my-select v-model="filters.sortBy" :sortOptions="sortOptions" />
      <my-input
        @input="onChangeSearchInput"
        placeholder="Поиск..."
        class="card-list__search"
      >
        <img src="/search.svg" alt="search" class="absolute left-4 top-5" />
      </my-input>
    </div>
  </div>
  <banner-component></banner-component>
  <card-list
    :cards="cards"
    @toggleFavorite="toggleFavorite"
    @toggleItemCart="toggleItemCart"
  />
</template>

<script setup>
import { reactive, watch, onMounted, inject } from "vue";
import debounce from "lodash.debounce";

import CardList from "@/components/CardList";
import BannerComponent from "@/components/BannerComponent";

import { useCards } from "@/hooks/useCards";
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
