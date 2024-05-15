<template>
  <div class="container q-ma-xs">
    <q-markup-table
      id="myTable"
      flat
      dense
      style="width: 100%; border: 0px solid black"
    >
      <tr>
        <!-- Ön Kısım -->
        <td style="width: 0">
          <div class="bus-front-side">
            <q-img
              src="/svg/seat_plan/wheel.svg"
              width="50px"
              height="50px"
              style="margin: 160px 0 0 30px; rotate: -90deg"
            />
          </div>
        </td>

        <!-- Koltuklar -->
        <td v-for="r in maxRow" :key="r" class="bus-seat-row">
          <BusSeat :seat="getSeat(r, 4)" />
          <BusSeat :seat="getSeat(r, 3)" />

          <!-- Koridor -->
          <BusSeat :seat="getSeat(0, 0)" />

          <BusSeat :seat="getSeat(r, 2)" />
          <BusSeat :seat="getSeat(r, 1)" />
        </td>

        <!-- Arka Kısım -->
        <td>
          <div class="bus-back-side"></div>
        </td>
      </tr>
    </q-markup-table>
  </div>

  <pre style="color: red"><b>selectedSeats:</b>{{ selectedSeats }}</pre>
  <pre style="color: blue"><b>SEAT:</b>{{ global.activeSeat }}</pre>
  <pre>{{ seatPlan.data.layout.seats }}</pre>

  <q-dialog
    v-model="global.askGender"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card style="width: 250px">
      <q-card-section class="q-pt-none text-h5 text-center">
        {{ global.activeSeat.no }} Nolu Koltuk?
      </q-card-section>
      <q-card-section class="q-pt-none q-mt-none text-center">
        <q-btn
          rounded
          elevated
          @click="selectGender('m')"
          size="40px"
          Xfont-size="50px"
          color="white"
          text-color="blue"
          icon="man"
          class="q-mr-sm"
        />
        <q-btn
          rounded
          elevated
          @click="selectGender('f')"
          size="40px"
          Xfont-size="50px"
          color="white"
          text-color="pink"
          icon="woman"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import BusSeat from 'src/components/BusSeat.vue';
import { computed } from 'vue';
import { onMounted } from 'vue';

import { ref } from 'vue';

interface SSeat {
  seatseat: object;
  gender: string;
}

const selectedGender = ref('');
const selectedSeats = ref<SSeat[]>([]);

const selectGender = (gender: string) => {
  console.log(gender + ' seçildi');
  selectedSeats.value.push({ seatseat: global.activeSeat, gender: gender });

  selectedGender.value = gender;
  global.askGender = false;
};
import { ISeat } from 'src/types/myTypes';
import { useCounterStore } from 'src/stores/example-store';
const global = useCounterStore();

const seatUndefined: ISeat = {
  no: '',
  row: '',
  col: '',
  type: 'seat-undefined',
  pricing: '',
};

onMounted(() => {
  //
});

function getSeat(r: number, c: number) {
  return (
    seatPlan.data.layout.seats.find(
      (seat) => seat.row === r && seat.col === c
    ) || seatUndefined
  );
}

const maxRow = computed(() =>
  Math.max(...seatPlan.data.layout.seats.map((seat) => seat.row))
);

const seatPlan = {
  sender: 'ticket',
  apiVersion: '0.2.0',
  userId: '1',
  method: 'journeys.seats',
  params: {
    journeyId: '147417-3-9',
  },
  data: {
    thisStationTime: '2024-01-10 14:00:00',
    thisStationFinishTime: '2024-01-10 14:15:00',
    firstStationTime: '2024-01-10 12:00:00',
    lastStationTime: '2024-01-10 16:00:00',
    other: {
      journeyNotes: [],
      forbiddenToInternet: null,
      routeId: '9',
      rotaId: '9',
      fromStationId: 3,
      toStationId: 9,
      listId: 147417,
    },
    contact: {
      licensePlate: '21SABIT38',
      phone: '',
    },
    layout: {
      floor: 1,
      type: '2+1',
      seats: [
        {
          no: 1,
          row: 1,
          col: 1,
          type: 'taken-f',
          pricing: 1,
        },
        {
          no: 2,
          row: 1,
          col: 3,
          type: 'available-f',
          pricing: 1,
        },
        {
          no: 3,
          row: 1,
          col: 4,
          type: 'taken-f',
          pricing: 1,
        },
        {
          no: 4,
          row: 2,
          col: 1,
          type: 'taken-f',
          pricing: 1,
        },
        {
          no: 5,
          row: 2,
          col: 3,
          type: 'taken-f',
          pricing: 1,
        },
        {
          no: 6,
          row: 2,
          col: 4,
          type: 'taken-f',
          pricing: 1,
        },
        {
          no: 7,
          row: 3,
          col: 1,
          type: 'taken-f',
          pricing: 1,
        },
        {
          no: 8,
          row: 3,
          col: 3,
          type: 'available-f',
          pricing: 1,
        },
        {
          no: 9,
          row: 3,
          col: 4,
          type: 'taken-f',
          pricing: 1,
        },
        {
          no: 10,
          row: 4,
          col: 1,
          type: 'taken-m',
          pricing: 1,
        },
        {
          no: 11,
          row: 4,
          col: 3,
          type: 'taken-m',
          pricing: 1,
        },
        {
          no: 12,
          row: 4,
          col: 4,
          type: 'taken-m',
          pricing: 1,
        },
        {
          no: 13,
          row: 5,
          col: 1,
          type: 'taken-f',
          pricing: 1,
        },
        {
          no: 14,
          row: 5,
          col: 3,
          type: 'available-f',
          pricing: 1,
        },
        {
          no: 15,
          row: 5,
          col: 4,
          type: 'taken-f',
          pricing: 1,
        },
        {
          no: 16,
          row: 6,
          col: 1,
          type: 'taken-m',
          pricing: 1,
        },
        {
          no: 17,
          row: 6,
          col: 3,
          type: 'available',
          pricing: 1,
        },
        {
          no: 18,
          row: 6,
          col: 4,
          type: 'available',
          pricing: 1,
        },
        {
          no: 19,
          row: 7,
          col: 1,
          type: 'available',
          pricing: 1,
        },
        {
          no: 20,
          row: 8,
          col: 1,
          type: 'available',
          pricing: 1,
        },
        {
          no: 21,
          row: 8,
          col: 3,
          type: 'available',
          pricing: 1,
        },
        {
          no: 22,
          row: 8,
          col: 4,
          type: 'available',
          pricing: 1,
        },
        {
          no: 23,
          row: 9,
          col: 1,
          type: 'available',
          pricing: 1,
        },
        {
          no: 24,
          row: 9,
          col: 3,
          type: 'available',
          pricing: 1,
        },
        {
          no: 25,
          row: 9,
          col: 4,
          type: 'available',
          pricing: 1,
        },
        {
          no: 26,
          row: 10,
          col: 1,
          type: 'available',
          pricing: 1,
        },
        {
          no: 27,
          row: 10,
          col: 3,
          type: 'available',
          pricing: 1,
        },
        {
          no: 28,
          row: 10,
          col: 4,
          type: 'available',
          pricing: 1,
        },
        {
          no: 29,
          row: 11,
          col: 1,
          type: 'available',
          pricing: 1,
        },
        {
          no: 30,
          row: 11,
          col: 3,
          type: 'available',
          pricing: 1,
        },
        {
          no: 31,
          row: 11,
          col: 4,
          type: 'available',
          pricing: 1,
        },
        {
          no: 32,
          row: 12,
          col: 1,
          type: 'available',
          pricing: 1,
        },
        {
          no: 33,
          row: 12,
          col: 3,
          type: 'available',
          pricing: 1,
        },
        {
          no: 34,
          row: 12,
          col: 4,
          type: 'available',
          pricing: 1,
        },
        {
          no: 35,
          row: 13,
          col: 1,
          type: 'available-m',
          pricing: 1,
        },
        {
          no: 36,
          row: 13,
          col: 3,
          type: 'available-m',
          pricing: 1,
        },
        {
          no: 37,
          row: 13,
          col: 4,
          type: 'available-m',
          pricing: 1,
        },
        {
          no: 38,
          row: 13,
          col: 2,
          type: 'available-m',
          pricing: 1,
        },
      ],
    },
    pricing: [
      {
        id: 1,
        name: 'Normal Koltuk',
        fixPrice: false,
        adult: 180,
        child: 126,
        handicapped: 126,
      },
    ],
  },
};
</script>

<style scoped>
#myTable tr td {
  margin: 0;
  padding: 0;
}
</style>
