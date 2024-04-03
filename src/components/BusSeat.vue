<template>
  <div class="bus-corridor" v-if="isCorridor" />
  <div
    class="bus-seat"
    :class="mySeat.type"
    :style="{ cursor: myPointer }"
    v-if="!isCorridor"
    @click="seatClicked(mySeat)"
  >
    {{ mySeat.no }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ISeat } from 'src/types/myTypes';

import { useCounterStore } from 'src/stores/example-store';
const global = useCounterStore();

const props = defineProps(['seat']);
const mySeat = ref<ISeat>(props.seat);

const isCorridor = computed(() => {
  return mySeat.value.no == '0' || mySeat.value.no == '';
});

const myPointer = computed(() => {
  if (mySeat.value.type == 'taken-f' || mySeat.value.type == 'taken-m') {
    return 'not-allowed';
  }

  if (
    mySeat.value.type == 'available-f' ||
    mySeat.value.type == 'available-m' ||
    mySeat.value.type == 'available'
  ) {
    return 'pointer';
  }

  return 'not-allowed'; // Buraya düşmeyecek sanırım
});

if (mySeat.value == null) {
  mySeat.value = {
    no: '',
    row: '',
    col: '',
    type: 'seat-undefined',
    pricing: '',
  };
}

function seatClicked(seat: ISeat) {
  global.activeSeat = seat;
  if (seat.type == 'taken-f' || seat.type == 'taken-m') {
    console.log('Koltuk zaten dolu', seat.no);
    global.askGender = false;
  }
  if (
    seat.type == 'available-f' ||
    seat.type == 'available-m' ||
    seat.type == 'available'
  ) {
    console.log('Koltuk boş:', seat.no);
    global.askGender = true;
  }
}
</script>
