<template>
  <div v-if="favorites.length">
    <div class="flex align-center mb-8">
      <router-link to="/" class="mr-5">
        <img src="/left.svg" alt="back" />
      </router-link>
      <my-title>Мои закладки</my-title>
    </div>
    <card-list
      :cards="favorites"
      @toggleFavorite="deleteFavorite"
      @toggleItemCart="toggleItemCart"
    />
  </div>
  <info-component
    imageUrl="/emoji-1.png"
    title="Закладок нет :("
    text="Вы ничего не добавляли в закладки"
  />
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, inject, watch } from "vue";

import CardList from "@/components/CardList";
import InfoComponent from "@/components/InfoComponent";

const { toggleItemCart, cartItems } = inject("cart");

const favorites = ref([]);

const fetchFavorites = async () => {
  try {
    const { data } = await axios.get(
      "https://4384da2c13f50563.mokky.dev/favorites",
      {
        params: {
          _relations: "products",
        },
      }
    );
    favorites.value = data.map((card) => ({
      ...card.product,
      favoriteId: card.id,
      isFavorite: true,
    }));
  } catch (e) {
    console.error(e.message);
  }
};

const deleteFavorite = async (item) => {
  try {
    favorites.value = favorites.value.filter(
      (favoriteItem) => favoriteItem.favoriteId !== item.favoriteId
    );
    await axios.delete(
      `https://4384da2c13f50563.mokky.dev/favorites/${item.favoriteId}`
    );
  } catch (e) {
    console.error(e.message);
  }
};

watch(cartItems, () => {
  favorites.value = favorites.value.map((card) => {
    return {
      ...card,
      isAdded: cartItems.value.some((item) => item.id === card.id),
    };
  });
});

onMounted(async () => {
  await fetchFavorites();
  favorites.value = favorites.value.map((card) => {
    return {
      ...card,
      isAdded: cartItems.value.some((item) => item.id === card.id),
    };
  });
});
</script>
