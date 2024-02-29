<template>
  {{ mySeat.no }}
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['seat']);
const mySeat = ref(props.seat.value);
</script>
