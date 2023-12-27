<template>
  <div
    class="drawer__cart absolute right-0 top-0 h-full bg-white p-7 flex flex-col justify-between"
    @click.stop
  >
    <div class="h-full">
      <div class="flex align-center">
        <button class="h-fit mr-5" @click="toggleDrawer">
          <img
            src="/arrow-left.svg"
            class="hover:opacity-40 transition"
            alt="left"
          />
        </button>
        <h3 class="drawer__heading text-2xl mb-7">Корзина</h3>
      </div>
      <div v-if="totalPrice">
        <cart-item
          v-for="item in cartItems"
          :imageUrl="item.imageUrl"
          :key="item.id"
          :title="item.title"
          :price="item.price"
          @toggleItemCart="() => toggleItemCart(item)"
        />
      </div>
      <cart-info
        v-else-if="order.id"
        title="Заказ оформлен!"
        :text="`Ваш заказ #${order.id} скоро будет передан курьерской доставке`"
        imageUrl="/order-success-icon.png"
      />
      <cart-info
        v-else
        title="Корзина пустая"
        text="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        imageUrl="/package-icon.png"
      />
    </div>
    <cart-create v-if="totalPrice" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import cartItem from "@/components/cartItem";
import cartCreate from "@/components/cartCreate";
import cartInfo from "@/components/cartInfo";

const { cartItems, toggleItemCart, totalPrice, toggleDrawer } = inject("cart");
const { order } = inject("order");
</script>
