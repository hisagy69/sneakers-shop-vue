<template>
  <div
    class="drawer__cart absolute right-0 top-0 h-full bg-white p-7 flex flex-col justify-between"
    @click.stop
  >
    <div>
      <div class="flex align-center">
        <button class="h-fit mr-5" @click="$emit('removeDrawer')">
          <img
            src="/arrow-left.svg"
            class="hover:opacity-40 transition"
            alt="left"
          />
        </button>
        <h3 class="drawer__heading text-2xl mb-7">Корзина</h3>
      </div>
      <cart-item
        imageUrl="/sneakers/sneakers-1.jpg"
        title="Мужские Кроссовки Nike Air Max 270"
        :price="12999"
      />
      <cart-item
        imageUrl="/sneakers/sneakers-2.jpg"
        title="Мужские Кроссовки Nike Air Max 270"
        :price="12999"
      />
    </div>
    <div>
      <div
        class="drawer__total-price text-base mb-5 flex justify-between gap-x-2"
      >
        <span>Итого:</span>
        <div class="flex-1 h-px border-b border-dashed self-end"></div>
        <b class="whitespace-nowrap">21 498 руб.</b>
      </div>
      <div class="drawer__vat text-base mb-6 flex justify-between gap-x-2">
        <span class="whitespace-nowrap">Налог 5%:</span>
        <div class="flex-1 h-px border-b border-dashed self-end"></div>
        <b class="whitespace-nowrap">1074 руб.</b>
      </div>
      <my-button>
        <span
          >Оформить заказ<img
            src="/arrow-next.svg"
            class="inline ml-10"
            alt="next"
        /></span>
      </my-button>
    </div>
  </div>
</template>

<script setup>
import cartItem from "@/components/cartItem";
</script>
