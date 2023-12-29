<template>
  <header
    class="header p-11 mb-11 border-b border-slate-300 flex justify-between items-center"
  >
    <router-link to="/">
      <div class="logo header__logo flex">
        <img src="/logo.png" class="w-10 h-10 mr-4" alt="logo" />
        <div class="logo__text flex flex-col">
          <strong class="text-xl">VUE SNEAKERS</strong>
          <span class="text-sm text-slate-400">Магазин лучших кроссовок</span>
        </div>
      </div>
    </router-link>
    <nav class="nav header__nav flex gap-10">
      <div
        href="#"
        class="nav__item text-slate-400 hover:text-slate-600 transition-all flex items-center cursor-pointer"
        @click="toggleDrawer"
      >
        <img src="/cart.svg" alt="cart" class="inline-block mr-2" />{{
          totalPrice
        }}
        руб.
      </div>
      <router-link
        to="/favorites"
        href="#"
        class="nav__item text-slate-400 hover:text-slate-600 transition-all flex items-center"
      >
        <img src="/heart.svg" alt="heart" class="inline-block mr-2" />
        Закладки
      </router-link>
      <router-link
        to="/profile"
        href="#"
        class="nav__item text-slate-400 hover:text-slate-600 transition-all flex items-center"
      >
        <img src="/profile.svg" alt="profile" class="inline-block mr-2" />
        Профиль
      </router-link>
    </nav>
  </header>
</template>
<script setup>
import { inject } from "vue";

defineProps({
  totalPrice: Number,
});
const { toggleDrawer } = inject("cart");
</script>
