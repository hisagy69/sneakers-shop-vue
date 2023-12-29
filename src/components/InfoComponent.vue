<template>
  <div class="flex items-center justify-center flex-col info-block">
    <img :src="imageUrl" width="70" height="70" alt="emoji" class="mb-7" />
    <h1 class="text-2xl font-bold mb-3">{{ title }}</h1>
    <p class="text-slate-400 mb-16">{{ text }}</p>
    <my-button @click="$router.push('/')" class="max-w-60">
      <span class="flex align-center justify-center">
        <img src="/back.svg" alt="left" class="mr-10" />
        Вернуться назад
      </span>
    </my-button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
  imageUrl: String,
});
</script>

<style scoped>
.info-block {
  height: 70vh;
}
</style>
