<template>
  <div class="h-full flex flex-col justify-center">
    <img :src="imageUrl" alt="package" class="w-28 h-28 mx-auto mb-5" />
    <h3 class="text-xl text-center font-semibold mb-2.5">{{ title }}</h3>
    <p class="text-base text-center max-w-72 text-slate-400 mb-10">
      {{ text }}
    </p>
    <my-button @click="toggleDrawer">
      <span class="flex align-center justify-center">
        <img src="/back.svg" alt="left" class="mr-10" />
        Вернуться назад
      </span>
    </my-button>
  </div>
</template>
<script setup>
import { inject } from "vue";

defineProps({
  title: String,
  text: String,
  imageUrl: String,
});
const { toggleDrawer } = inject("cart");
</script>
