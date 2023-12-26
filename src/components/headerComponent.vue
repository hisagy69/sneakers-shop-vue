<template>
  <header
    class="header p-11 mb-11 border-b border-slate-300 flex justify-between items-center"
  >
    <div class="logo header__logo flex">
      <img src="/logo.png" class="w-10 h-10 mr-4" alt="logo" />
      <div class="logo__text flex flex-col">
        <strong class="text-xl">VUE SNEAKERS</strong>
        <span class="text-sm text-slate-400">Магазин лучших кроссовок</span>
      </div>
    </div>
    <nav class="nav header__nav flex gap-10">
      <a
        href="#"
        class="nav__item text-slate-400 hover:text-slate-600 transition-all flex items-center"
        @click="onClickCart"
      >
        <img src="/cart.svg" alt="cart" class="inline-block mr-2" />1205 руб.
      </a>
      <a
        href="#"
        class="nav__item text-slate-400 hover:text-slate-600 transition-all flex items-center"
      >
        <img src="/heart.svg" alt="heart" class="inline-block mr-2" />
        Закладки
      </a>
      <a
        href="#"
        class="nav__item text-slate-400 hover:text-slate-600 transition-all flex items-center"
      >
        <img src="/profile.svg" alt="profile" class="inline-block mr-2" />
        Профиль
      </a>
    </nav>
  </header>
</template>
<script setup>
const emit = defineEmits(["addDrower"]);
const onClickCart = () => {
  emit("addDrower");
};
</script>
