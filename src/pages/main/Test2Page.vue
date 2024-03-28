<template>
  Sayaç: {{ global.counter }}
  <br />
  <br />

  <q-btn label="Sayaç ++" color="primary" @click="global.counter++" />

  <TheBus />
</template>

<script setup lang="ts">
import { useCounterStore } from 'src/stores/example-store';
import TheBus from 'src/components/bus/TheBus.vue';
const global = useCounterStore();
console.log('counter:', global.counter);
</script>
