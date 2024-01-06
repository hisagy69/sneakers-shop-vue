<template>
  <div class="card-list">
    <div
      v-if="isLoadCards"
      class="card-list__items grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-12"
    >
      <card-skeleton v-for="key in 12" :key="key" />
    </div>
    <div
      v-else
      class="card-list__items grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-12"
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
        :onClickFavorite="() => emit('toggleFavorite', card)"
        :onClickCart="() => emit('toggleItemCart', card)"
      />
    </div>
  </div>
</template>

<script setup>
import CardItem from "@/components/CardItem";
import CardSkeleton from "@/components/CardSkeleton";

defineProps({
  cards: Array,
  isLoadCards: Boolean,
});

const emit = defineEmits(["toggleFavorite", "toggleItemCart"]);
</script>
