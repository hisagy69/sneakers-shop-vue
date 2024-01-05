<template>
  <div class="relative mb-10">
    <Swiper @swiper="onSwiper">
      <swiper-slide v-for="item in bannerItems" :key="item.id">
        <banner-slide
          :imageUrl="item.imageUrl"
          :logoUrl="item.logoUrl"
          :product="item.product"
        />
      </swiper-slide>
    </Swiper>
    <button
      v-if="swiper?.activeIndex > 0"
      @click="swiper.slidePrev()"
      class="button-prev absolute left-0 top-1/2 w-9 h-9 rounded-full z-10 bg-white flex items-center justify-center"
    >
      <img src="/arrow-left-button.svg" alt="arrow-right" />
    </button>
    <button
      v-if="swiper?.activeIndex < bannerItems.length - 1"
      @click="swiper.slideNext()"
      class="button-next absolute right-0 top-1/2 w-9 h-9 rounded-full z-10 bg-white flex items-center justify-center"
    >
      <img src="/arrow-right-button.svg" alt="arrow-right" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import BannerSlide from "@/components/BannerSlide.vue";

const swiper = ref(null);
const bannerItems = ref([]);

const onSwiper = (instance) => {
  swiper.value = instance;
};

const bannersFetch = async () => {
  try {
    const { data } = await axios.get(
      "https://4384da2c13f50563.mokky.dev/banners",
      {
        params: {
          _relations: "products",
        },
      }
    );
    bannerItems.value = data;
  } catch (e) {
    console.error(e.message);
  }
};

onMounted(async () => {
  await bannersFetch();
});
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
