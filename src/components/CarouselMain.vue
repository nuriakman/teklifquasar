<template>
  <q-carousel
    height="400px"
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = 0"
    @mouseleave="autoplay = duration"
  >
    <q-carousel-slide
      name="first"
      img-src="https://cdn.quasar.dev/img/mountains.jpg"
    >
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">Teklif verin</div>
        <div class="text-subtitle1">Hızlı teklif verin</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide
      name="second"
      img-src="https://cdn.quasar.dev/img/parallax1.jpg"
    >
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">Siparişlerinizi arttırın</div>
        <div class="text-subtitle1">Müşteri memnuniyetinizi arttırın</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide
      name="third"
      img-src="https://cdn.quasar.dev/img/parallax2.jpg"
    >
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">İşinizi büyütün</div>
        <div class="text-subtitle1">Yazılımın gücünü kullanın</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref } from 'vue';
const duration = 800;
const autoplay = ref(duration);
const slide = ref('first');
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
