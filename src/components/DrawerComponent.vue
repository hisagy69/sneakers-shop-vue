<template>
  <div
    class="drawer w-screen h-screen fixed left-0 top-0 bg-black/70 z-20"
    @click.stop="toggleDrawer"
  >
    <drawer-cart />
  </div>
</template>

<script setup>
import { inject } from "vue";
import DrawerCart from "@/components/DrawerCart";

const { toggleDrawer } = inject("cart");
</script>
