<template>
  <div v-if="favorites.length">
    <div class="flex align-center mb-10">
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
    v-else
    imageUrl="/emoji-1.png"
    title="Закладок нет :("
    text="Вы ничего не добавляли в закладки"
  />
</template>

<script setup>
import { inject, watch } from "vue";

import CardList from "@/components/CardList";
import InfoComponent from "@/components/InfoComponent";

import { useFavorites } from "@/hooks/useFavorites";
import { useDeleteFavorite } from "@/hooks/useDeleteFavorite";

const { toggleItemCart, cartItems } = inject("cart");

const filterItemsAdded = () => {
  favorites.value = favorites.value.map((card) => {
    return {
      ...card,
      isAdded: cartItems.value.some((item) => item.id === card.id),
    };
  });
};

const favoritesDeleteItem = (item) => {
  favorites.value = favorites.value.filter(
    (favoriteItem) => favoriteItem.favoriteId !== item.favoriteId
  );
};

const { favorites } = useFavorites(filterItemsAdded);
const { deleteFavorite } = useDeleteFavorite(favoritesDeleteItem);

watch(cartItems, () => {
  filterItemsAdded();
});
</script>
