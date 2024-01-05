<template>
  <div class="relative mb-10">
    <Swiper @swiper="onSwiper">
      <swiper-slide>
        <banner-slide />
      </swiper-slide>
      <swiper-slide>
        <banner-slide />
      </swiper-slide>
    </Swiper>
    <button
      @click="swiper.slidePrev()"
      class="button-prev absolute left-0 top-1/2 w-9 h-9 rounded-full z-10 bg-white flex items-center justify-center"
    >
      <img src="/arrow-left-button.svg" alt="arrow-right" />
    </button>
    <button
      @click="swiper.slideNext()"
      class="button-next absolute right-0 top-1/2 w-9 h-9 rounded-full z-10 bg-white flex items-center justify-center"
    >
      <img src="/arrow-right-button.svg" alt="arrow-right" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import BannerSlide from "@/components/BannerSlide.vue";

const swiper = ref(null);
const onSwiper = (instance) => {
  console.log(instance);
  swiper.value = instance;
};
</script>

<style scoped>
.button-next {
  transform: translate(50%, -50%);
  box-shadow: 0px 4px 8px 0px #0000000a;
}
.button-prev {
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 8px 0px #0000000a;
}
</style>
