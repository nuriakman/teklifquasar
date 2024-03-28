<template>
  <!-- Koltuk Bölümü -->
  <path
    v-for="(seat, index) in seats"
    :key="index"
    :style="{
      fill: seat.color,
      'fill-opacity': 0.5,
      stroke: seat.strokeColor,
      'stroke-width': 0.264999,
    }"
    :d="`M${seat.x} ${seat.y}v${seat.height}h${seat.width}V${seat.y}Z`"
  ></path>
  <text
    v-for="(seat, index) in seats"
    :key="index"
    xml:space="preserve"
    :x="seat.textX"
    :y="seat.textY"
    text-anchor="middle"
    dominant-baseline="middle"
    style="font-size: 5px"
  >
    {{ seat.number }}
  </text>
</template>

<script>
export default {
  data() {
    return {
      seats: [],
    };
  },
  created() {
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 20; col++) {
        const seatNumber = row + col + 1;
        const seatX = 30 + col * 13;
        const seatY = 3 + row * 13;
        const textX = seatX + 5;
        const textY = seatY + 5;
        this.seats.push({
          x: seatX,
          y: seatY,
          width: 10,
          height: 10,
          color: '#faa',
          strokeColor: '#de8787',
          number: seatNumber,
          textX: textX,
          textY: textY,
        });
      }
    }
  },
};
</script>
