<template>
  <div class="koridor" v-if="isKoridor" />
  <div class="koltuk" :class="mySeat.type" v-if="!isKoridor">
    {{ mySeat.no }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Seat {
  no: string;
  row: string;
  col: string;
  type: string;
  pricing: string;
  seatCode: string;
}

const props = defineProps(['seat']);
const mySeat = ref<Seat>(props.seat);

const isKoridor = computed(() => {
  return mySeat.value.no == '0';
});

if (mySeat.value == null) {
  mySeat.value = {
    no: '',
    row: '',
    col: '',
    type: '',
    pricing: '',
    seatCode: 'mx',
  };
}
</script>
