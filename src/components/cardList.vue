<template>
  <div class="card-list px-11">
    <div class="card-list__items grid grid-cols-4 gap-x-10 gap-y-12">
      <card-item
        v-for="card in cards"
        :key="card.id"
        :id="card.id"
        :imageUrl="card.imageUrl"
        :title="card.title"
        :price="card.price"
        :isFavorite="card.isFavorite"
        :isAdded="true"
        :onClickFavorite="() => emit('addToFavorite', card)"
      />
    </div>
  </div>
</template>

<script setup>
import cardItem from "@/components/cardItem";

defineProps({
  cards: Array,
});

const emit = defineEmits(["addToFavorite"]);
</script>
