<template>
  <my-title class="mb-10">Мои покупки</my-title>
  <card-list
    :cards="orderItems"
    @toggleFavorite="toggleFavorite"
    @toggleItemCart="toggleItemCart"
  />
</template>

<script setup>
import { inject, watch } from "vue";

import cardList from "@/components/CardList";

import { useFavorites } from "@/hooks/useFavorites";
import { useOrders } from "@/hooks/useOrders";
import { useToggleFavorites } from "@/hooks/useToggleFavorites";

const { toggleItemCart, cartItems } = inject("cart");

const filterItemsAdded = () => {
  orderItems.value = orderItems.value.map((card) => {
    return {
      ...card,
      isAdded: cartItems.value.some((item) => item.id === card.id),
    };
  });
};

const filterItemsFavorite = () => {
  orderItems.value = orderItems.value.map((card) => {
    const favorite = favorites.value.find((item) => item.id === card.id);
    if (favorite) {
      return {
        ...card,
        isFavorite: !!favorite,
        favoriteId: favorite.favoriteId,
      };
    } else {
      return {
        ...card,
        isFavorite: false,
        favoriteId: null,
      };
    }
  });
};

const { orderItems } = useOrders(filterItemsAdded);
const { favorites } = useFavorites(filterItemsFavorite);
const { toggleFavorite } = useToggleFavorites();

watch(cartItems, () => {
  filterItemsAdded();
});
</script>
