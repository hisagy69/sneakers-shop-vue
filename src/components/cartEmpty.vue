<template>
  <div class="mt-80">
    <img src="/package-icon.png" alt="package" class="w-28 h-28 mx-auto mb-5" />
    <h3 class="text-xl text-center font-semibold mb-2.5">Корзина пустая</h3>
    <p class="text-base text-center max-w-72 text-slate-400 mb-10">
      Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
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
const { toggleDrawer } = inject("cart");
</script>
