<template>
  <drawer-component v-if="drawerVisible" />
  <div class="md:w-4/5 w-full mx-auto bg-white rounded-2xl shadow-xl mt-14">
    <header-component :totalPrice="totalPrice" />
    <div class="p-11">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, provide, computed } from "vue";
import axios from "axios";

import HeaderComponent from "@/components/HeaderComponent";
import DrawerComponent from "@/components/DrawerComponent";

const drawerVisible = ref(false);
const cartItems = ref([]);
const isCreatingOrder = ref(false);
const order = ref({});

const toggleItemCart = (item) => {
  if (item.isAdded) {
    cartItems.value = cartItems.value.filter(
      (cartItem) => cartItem.id !== item.id
    );
    item.isAdded = false;
  } else {
    cartItems.value.push(item);
    item.isAdded = true;
  }
};

const createOrder = async () => {
  try {
    isCreatingOrder.value = true;
    order.value = {};

    const { data } = await axios.post(
      "https://4384da2c13f50563.mokky.dev/orders",
      {
        items: cartItems.value,
        totalPrice: totalPrice.value,
      }
    );
    cartItems.value = [];
    order.value = data;
  } catch (e) {
    console.error(e.message);
  } finally {
    isCreatingOrder.value = false;
  }
};

const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value;
};

const totalPrice = computed(() => {
  return cartItems.value.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
});

watch(
  cartItems,
  () => localStorage.setItem("cart", JSON.stringify(cartItems.value)),
  { deep: true }
);

onMounted(() => {
  cartItems.value = JSON.parse(localStorage.getItem("cart")) || [];
});

provide("cart", { toggleDrawer, cartItems, totalPrice, toggleItemCart });
provide("order", { createOrder, isCreatingOrder, order });
</script>
