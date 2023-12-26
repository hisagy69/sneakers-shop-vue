<template>
  <div
    class="drawer__cart absolute right-0 top-0 h-full bg-white p-7 flex flex-col justify-between"
    @click.stop
  >
    <div>
      <div class="flex align-center">
        <button class="h-fit mr-5" @click="toggleDrawer">
          <img
            src="/arrow-left.svg"
            class="hover:opacity-40 transition"
            alt="left"
          />
        </button>
        <h3 class="drawer__heading text-2xl mb-7">Корзина</h3>
      </div>
      <cart-item
        v-for="item in cartItems"
        :imageUrl="item.imageUrl"
        :key="item.id"
        :title="item.title"
        :price="item.price"
        @toggleItemCart="() => toggleItemCart(item)"
      />
    </div>
    <div>
      <div
        class="drawer__total-price text-base mb-5 flex justify-between gap-x-2"
      >
        <span>Итого:</span>
        <div class="flex-1 h-px border-b border-dashed self-end"></div>
        <b class="whitespace-nowrap">{{ totalPrice }} руб.</b>
      </div>
      <div class="drawer__vat text-base mb-6 flex justify-between gap-x-2">
        <span class="whitespace-nowrap">Налог 5%:</span>
        <div class="flex-1 h-px border-b border-dashed self-end"></div>
        <b class="whitespace-nowrap">{{ totalVat }} руб.</b>
      </div>
      <my-button @click="createOrder" :disabled="!totalPrice">
        <span
          >Оформить заказ<img
            src="/arrow-next.svg"
            class="inline ml-10"
            alt="next"
        /></span>
      </my-button>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";
import cartItem from "@/components/cartItem";

const totalVat = computed(() => {
  return Math.round(totalPrice.value * 0.05);
});

const { toggleDrawer } = inject("cart");
const { cartItems, toggleItemCart, totalPrice } = inject("cart");
const { createOrder } = inject("order");
</script>
