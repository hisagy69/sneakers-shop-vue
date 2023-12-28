<template>
  <div class="cart-item flex border rounded-2xl p-5 mb-5">
    <img :src="imageUrl" alt="sneakers" class="w-16 h-16" />
    <div class="flex flex-col ml-5">
      <p class="cart-item__title text-sm mb-2 w-36">{{ title }}</p>
      <b class="cart-item__price text-sm">{{ price }} руб.</b>
    </div>
    <button
      class="cart-item__button h-fit self-end hover:opacity-40 transition"
      @click="() => emit('toggleItemCart')"
    >
      <img src="/close.svg" alt="delete" />
    </button>
  </div>
</template>

<script setup>
defineProps({
  imageUrl: String,
  title: String,
  price: Number,
});

const emit = defineEmits(["toggleItemCart"]);
</script>
