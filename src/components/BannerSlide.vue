<template>
  <div class="banner w-full h-72 rounded-2xl flex justify-between">
    <div>
      <img :src="logoUrl" alt="logo-banner" class="mt-4 ml-5 mb-8" />
      <p class="text-4xl font-bold ml-16 mb-3">
        <span class="text-lime-400">Stan Smith</span>,<br />
        Forever!
      </p>
      <my-button
        class="max-w-44 ml-16 rounded-full uppercase font-bold"
        @click="toggleItemCart(product)"
      >
        Купить
      </my-button>
    </div>
    <div>
      <img :src="imageUrl" alt="banner-1" class="h-full" />
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

defineProps({ logoUrl: String, imageUrl: String, product: Object });

const { toggleItemCart } = inject("cart");
</script>

<style scoped>
.banner {
  background-color: #f4efe9;
}
</style>
