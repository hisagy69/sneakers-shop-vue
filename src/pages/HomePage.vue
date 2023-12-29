<template>
  <div class="flex justify-between align-center items-center px-11 mb-9">
    <h2 class="text-3xl font-bold">Все кроссовки</h2>
    <div class="flex">
      <my-select v-model="filters.sortBy" :sortOptions="sortOptions" />
      <my-input
        v-model="filters.searchQuery"
        placeholder="Поиск..."
        class="card-list__search"
      >
        <img src="/search.svg" alt="search" class="absolute left-4 top-5" />
      </my-input>
    </div>
  </div>
  <card-list
    :cards="cards"
    @addToFavorite="addToFavorite"
    @toggleItemCart="toggleItemCart"
  />
</template>

<script setup>
import axios from "axios";
import { ref, reactive, watch, onMounted, inject } from "vue";

import CardList from "@/components/CardList";
import { sortOptions } from "@/const";

const cards = ref([]);
const filters = reactive({
  sortBy: "",
  searchQuery: "",
});

const { cartItems, toggleItemCart } = inject("cart");

const cardsFetch = async () => {
  try {
    const params = {};
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }
    if (filters.sortBy) {
      params.sortBy = filters.sortBy;
    }
    const { data } = await axios.get(
      "https://4384da2c13f50563.mokky.dev/products",
      { params }
    );
    cards.value = data;
  } catch (e) {
    console.error(e.message);
  }
};

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(
      "https://4384da2c13f50563.mokky.dev/favorites"
    );
    cards.value = cards.value.map((card) => {
      const favorite = favorites.find(
        (favorite) => favorite.parentId === card.id
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
  } catch (e) {
    console.error(e.message);
  }
};

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      item.isFavorite = true;
      const { data } = await axios.post(
        "https://4384da2c13f50563.mokky.dev/favorites",
        {
          parentId: item.id,
        }
      );
      item.favoriteId = data.id;
    } else {
      item.isFavorite = false;
      await axios.delete(
        `https://4384da2c13f50563.mokky.dev/favorites/${item.favoriteId}`
      );
      item.favoriteId = null;
    }
  } catch (e) {
    console.error(e.message);
  }
};

watch(filters, cardsFetch);
watch(cartItems, () => {
  cards.value = cards.value.map((card) => {
    return {
      ...card,
      isAdded: cartItems.value.some((item) => item.id === card.id),
    };
  });
});

onMounted(async () => {
  await cardsFetch();
  await fetchFavorites();

  cards.value = cards.value.map((card) => {
    return {
      ...card,
      isAdded: cartItems.value.some((item) => item.id === card.id),
    };
  });
});
</script>
