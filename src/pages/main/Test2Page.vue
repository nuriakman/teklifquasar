<template>
  Sayaç: {{ global.counter }}
  <br />
  <br />

  <q-btn label="Sayaç ++" color="primary" @click="global.counter++" />
</template>

<script setup lang="ts">
import { useCounterStore } from 'src/stores/example-store';
const global = useCounterStore();
console.log('counter:', global.counter);
</script>
