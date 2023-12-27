<template>
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
      <span class="flex align-center justify-center">
        Оформить заказ
        <img src="/arrow-next.svg" class="ml-10" alt="next" />
      </span>
    </my-button>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";

const totalVat = computed(() => {
  return Math.round(totalPrice.value * 0.05);
});

const { totalPrice } = inject("cart");
const { createOrder } = inject("order");
</script>
