<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="MasterTotalWidth"
    :height="MasterTotalHeight"
    :viewBox="`0 0 ${totalWidth} ${totalHeight}`"
    style="border: 1px solid black"
  >
    <FrontSection />

    <SeatSection />

    <BackSection />
  </svg>
</template>

<script setup>
import FrontSection from 'src/components/bus/BusFront.vue';
import SeatSection from 'src/components/bus/BusSeat.vue';
import BackSection from 'src/components/bus/BusBack.vue';

const MasterTotalWidth = 500 + 50 * 9;
const MasterTotalHeight = 300;
const totalWidth = 70 + 17 * 9;
const totalHeight = 69;
// viewBox="0 0 48.299 68.792"

/*
    https://codebeautify.org/svg-viewer
    https://svg.enshrined.co.uk/
    https://jsonformatter.org/xml-formatter
  */
</script>
