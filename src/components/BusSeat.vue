<template>
  <div class="koridor" v-if="isKoridor" />
  <div
    class="koltuk"
    :class="mySeat.type"
    :style="{ cursor: myPointer }"
    v-if="!isKoridor"
    @click="seatClicked(mySeat)"
  >
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
}

const props = defineProps(['seat']);
const mySeat = ref<Seat>(props.seat);

const isKoridor = computed(() => {
  return mySeat.value.no == '0';
});

const myPointer = computed(() => {
  if (mySeat.value.type == 'taken-f' || mySeat.value.type == 'taken-m')
    return 'not-allowed';
  if (
    mySeat.value.type == 'available-f' ||
    mySeat.value.type == 'available-m' ||
    mySeat.value.type == 'available'
  )
    return 'pointer';
  return 'pointer'; // Buna gerek kalmıyor, ama olsun...
});

if (mySeat.value == null) {
  mySeat.value = {
    no: '',
    row: '',
    col: '',
    type: '',
    pricing: '',
  };
}

function seatClicked(seat: Seat) {
  if (seat.type == 'taken-f' || seat.type == 'taken-m') {
    // alert('Koltuk zaten dolu');
    console.log('Koltuk zaten dolu');
    return false;
  }
  if (
    seat.type == 'available-f' ||
    seat.type == 'available-m' ||
    seat.type == 'available'
  ) {
    console.log('Koltuk boş:', seat.no);
    return true;
  }
  console.log(seat.no);
}
</script>
