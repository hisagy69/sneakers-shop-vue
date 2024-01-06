<template>
  <div v-if="orderItems.length > 0 || isLoadOrders">
    <div class="flex align-center mb-10">
      <router-link to="/" class="mr-5">
        <img src="/left.svg" alt="back" />
      </router-link>
      <my-title>Мои покупки</my-title>
    </div>
    <card-list
      :isLoadCards="isLoadOrders"
      :cards="orderItems"
      @toggleFavorite="toggleFavorite"
      @toggleItemCart="toggleItemCart"
    />
  </div>
  <info-component
    v-else
    imageUrl="/emoji-2.png"
    title="У вас нет заказов"
    text="Оформите хотя бы один заказ."
  />
</template>

<script setup>
import { inject, watch } from "vue";

import cardList from "@/components/CardList";
import infoComponent from "@/components/InfoComponent";

import { useFavorites } from "@/hooks/useFavorites";
import { useOrders, isLoadOrders } from "@/hooks/useOrders";
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
