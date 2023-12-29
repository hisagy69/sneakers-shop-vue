<template>
  <div class="card-list">
    <div
      class="card-list__items grid grid-cols-4 gap-x-10 gap-y-12"
      v-auto-animate
    >
      <card-item
        v-for="card in cards"
        :key="card.id"
        :id="card.id"
        :imageUrl="card.imageUrl"
        :title="card.title"
        :price="card.price"
        :isFavorite="card.isFavorite"
        :isAdded="card.isAdded"
        :onClickFavorite="() => emit('addToFavorite', card)"
        :onClickCart="() => emit('toggleItemCart', card)"
      />
    </div>
  </div>
</template>

<script setup>
import CardItem from "@/components/CardItem";

defineProps({
  cards: Array,
});

const emit = defineEmits(["addToFavorite", "toggleItemCart"]);
</script>
