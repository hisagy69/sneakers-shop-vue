<template>
  <div
    class="card rounded-3xl border border-slate-100 transition-shadow p-7 relative cursor-pointer hover:shadow-lg"
  >
    <div class="card__bookmark absolute left-7 top-7" @click="onClickFavorite">
      <img :src="isFavorite ? '/like-2.svg' : '/like-1.svg'" alt="like" />
    </div>
    <div
      class="w-32 h-28 overflow-hidden d-flex align-center justify-center mx-auto"
    >
      <img :src="imageUrl" alt="sneakers" />
    </div>
    <p class="card__title min-h-10 mt-3.5 mb-3.5 text-sm">{{ title }}</p>
    <div class="flex align-center justify-between">
      <div class="card__price flex flex-col">
        <span class="text-slate-300 text-sm uppercase">Цена:</span>
        <b class="text-sm">{{ price }} руб.</b>
      </div>
      <button class="card__button" @click="onClickCart">
        <img :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="plus" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageUrl: String,
  title: String,
  id: Number,
  price: [Number, String],
  isFavorite: {
    type: Boolean,
    default: false,
  },
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickCart: Function,
});
</script>
