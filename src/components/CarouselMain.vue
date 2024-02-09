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
        <div class="text-h2">First stop</div>
        <div class="text-subtitle1">Mountains</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide
      name="second"
      img-src="https://cdn.quasar.dev/img/parallax1.jpg"
    >
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">Second stop</div>
        <div class="text-subtitle1">Famous City</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide
      name="third"
      img-src="https://cdn.quasar.dev/img/parallax2.jpg"
    >
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">Third stop</div>
        <div class="text-subtitle1">Famous Bridge</div>
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
