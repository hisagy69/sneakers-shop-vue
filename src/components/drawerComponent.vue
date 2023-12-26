<template>
  <div
    class="drawer w-screen h-screen fixed left-0 top-0 bg-black/70 z-10"
    @click.stop="$emit('removeDrawer')"
  >
    <drawer-cart @removeDrawer="$emit('removeDrawer')" />
  </div>
</template>

<script setup>
import drawerCart from "@/components/drawerCart.vue";
</script>
