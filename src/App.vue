<template>
  <drawer-component v-if="drawerVisible" />
  <div class="w-4/5 mx-auto bg-white rounded-2xl shadow-xl mt-14">
    <header-component />
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
    <card-list :cards="cards" @addToFavorite="addToFavorite" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, reactive, provide } from "vue";
import axios from "axios";

import headerComponent from "@/components/headerComponent";
import cardList from "@/components/cardList";
import { sortOptions } from "@/const";
import drawerComponent from "@/components/drawerComponent.vue";

const drawerVisible = ref(false);

const cards = ref([]);
const filters = reactive({
  sortBy: "",
  searchQuery: "",
});

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

onMounted(async () => {
  await cardsFetch();
  await fetchFavorites();
});

provide("toggleDrawer", () => {
  drawerVisible.value = !drawerVisible.value;
});
</script>
