<template>
  <div class="banner w-full min-h-72 rounded-2xl flex justify-between">
    <div>
      <img :src="logoUrl" alt="logo-banner" class="mt-4 ml-5 mb-8" />
      <p class="xl:text-4xl lg:text-2xl text-xl font-bold ml-5 xl:ml-16 mb-3">
        <span class="text-lime-400">{{ title }}</span
        >,<br />
        Forever!
      </p>
      <my-button
        class="xl:max-w-44 xl:ml-16 ml-5 rounded-full uppercase font-bold text-xs lg:text-base relative z-10"
        @click="toggleItemCart(product)"
      >
        Купить
      </my-button>
    </div>
    <div class="xl:max-w-2xl overflow-x-hidden">
      <img :src="imageUrl" alt="banner-1" class="h-full" />
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

defineProps({
  logoUrl: String,
  imageUrl: String,
  title: String,
  product: Object,
});

const { toggleItemCart } = inject("cart");
</script>

<style scoped>
.banner {
  background-color: #f4efe9;
}
</style>
