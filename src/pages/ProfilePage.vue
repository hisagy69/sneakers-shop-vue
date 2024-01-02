<template>
  <my-title>Мои покупки</my-title>
  <card-list
    :cards="orderItems"
    @toggleFavorite="toggleFavorite"
    @toggleItemCart="toggleItemCart"
  />
</template>

<script setup>
import { ref, onMounted, inject, watch } from "vue";
import axios from "axios";

import cardList from "@/components/CardList";

const { toggleItemCart, cartItems } = inject("cart");

const orderItems = ref([]);
const favorites = ref([]);

const fetchOrders = async () => {
  try {
    const { data } = await axios.get(
      "https://4384da2c13f50563.mokky.dev/orders"
    );
    orderItems.value = data.reduce((arr, order) => {
      arr.push(...order.items);
      return arr;
    }, []);
  } catch (e) {
    console.error(e.message);
  }
};

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

const toggleFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      item.isFavorite = true;
      const { data } = await axios.post(
        "https://4384da2c13f50563.mokky.dev/favorites",
        {
          product_id: item.id,
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

watch(cartItems, () => {
  filterItemsAdded();
});

onMounted(async () => {
  await fetchOrders();
  await fetchFavorites();
  filterItemsAdded();
  filterItemsFavorite();
});
</script>
