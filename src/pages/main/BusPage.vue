<template>
  <div class="container q-ma-xs">
    <q-markup-table
      id="myTable"
      flat
      dense
      style="width: 100%; border: 0px solid black"
    >
      <tr>
        <td style="width: 0">
          <div class="on_kisim">
            <q-img
              src="/src/../public/svg/seat_plan/wheel.svg"
              width="50px"
              height="50px"
              style="margin: 200px 0 0 30px"
            />
          </div>
        </td>
        <td
          style="width: 0; background-color: #e0e0e0"
          v-for="r in maxRow"
          :key="r"
          class="koltuklar"
        >
          <BusSeat :seat="getSeat(r, 4)" />
          <BusSeat :seat="getSeat(r, 3)" />
          <!--Koridor-->
          <BusSeat :seat="getSeat(0, 0)" />

          <BusSeat :seat="getSeat(r, 2)" />
          <BusSeat :seat="getSeat(r, 1)" />
        </td>
        <td>
          <div class="arka_kisim"></div>
        </td>
      </tr>
    </q-markup-table>
  </div>
  <pre>{{ seatPlan.data.layout.seats }}</pre>
</template>

<script setup lang="ts">
import BusSeat from 'src/components/BusSeat.vue';
import { computed } from 'vue';
import { onMounted } from 'vue';

interface Seat {
  no: string;
  row: string;
  col: string;
  type: string;
  pricing: string;
  seatCode: string;
}

onMounted(() => {
  //
});

function getSeat(r: number, c: number) {
  let seat = seatPlan.data.layout.seats.find(
    (seat) => seat.row == r && seat.col == c
  );
  if (seat) return seat;

  const blankSeat: Seat = {
    no: '0',
    row: '0',
    col: '0',
    type: '',
    pricing: '',
    seatCode: 'mx',
  };
  return blankSeat;
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
    stats: {
      userTotal: 0,
      userCount: 0,
      officeTotal: 0,
      officeCount: 0,
      ticketCount: 10,
      ticketTotal: 2180,
      reservedCount: 3,
      officeDiscountTotal: 0,
      officeDiscountCount: 0,
      officeDiscountBalanceHandicaped: 2,
      officeDiscountLimit: 0,
      officeDiscountBalance: 0,
      freeCount: 25,
    },
    reservedPassengersList: [
      {
        type: 'reserved',
        recordId: '493764',
        name: 'AYTUĞ ARMAĞAN',
        seatNumber: '10',
        fromName: 'ÇANKIRI OTOGAR',
        toName: 'ANKARA AŞTİ',
      },
      {
        type: 'reserved',
        recordId: '492961',
        name: 'EMİNE KÜÇÜKÇAKIR',
        seatNumber: '11',
        fromName: 'KASTAMONU OTOGAR',
        toName: 'ANKARA AŞTİ',
      },
      {
        type: 'reserved',
        recordId: '492962',
        name: 'EMİNE KÜÇÜKÇAKIR',
        seatNumber: '12',
        fromName: 'KASTAMONU OTOGAR',
        toName: 'ANKARA AŞTİ',
      },
    ],
    thisStationTime: '2024-01-10 14:00:00',
    thisStationFinishTime: '2024-01-10 14:15:00',
    firstStationTime: '2024-01-10 12:00:00',
    lastStationTime: '2024-01-10 16:00:00',
    stats2: {
      salesBrief: '',
      salesDetail: '',
    },
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
          seatCode: 'sk',
        },
        {
          no: 2,
          row: 1,
          col: 3,
          type: 'available-f',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 3,
          row: 1,
          col: 4,
          type: 'taken-f',
          pricing: 1,
          seatCode: 'sk',
        },
        {
          no: 4,
          row: 2,
          col: 1,
          type: 'taken-f',
          pricing: 1,
          seatCode: 'sk',
        },
        {
          no: 5,
          row: 2,
          col: 3,
          type: 'taken-f',
          pricing: 1,
          seatCode: 'sk',
        },
        {
          no: 6,
          row: 2,
          col: 4,
          type: 'taken-f',
          pricing: 1,
          seatCode: 'sk',
        },
        {
          no: 7,
          row: 3,
          col: 1,
          type: 'taken-f',
          pricing: 1,
          seatCode: 'sk',
        },
        {
          no: 8,
          row: 3,
          col: 3,
          type: 'available-f',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 9,
          row: 3,
          col: 4,
          type: 'taken-f',
          pricing: 1,
          seatCode: 'sk',
        },
        {
          no: 10,
          row: 4,
          col: 1,
          type: 'taken-m',
          pricing: 1,
          seatCode: 're',
        },
        {
          no: 11,
          row: 4,
          col: 3,
          type: 'taken-m',
          pricing: 1,
          seatCode: 're',
        },
        {
          no: 12,
          row: 4,
          col: 4,
          type: 'taken-m',
          pricing: 1,
          seatCode: 're',
        },
        {
          no: 13,
          row: 5,
          col: 1,
          type: 'taken-f',
          pricing: 1,
          seatCode: 'sk',
        },
        {
          no: 14,
          row: 5,
          col: 3,
          type: 'available-f',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 15,
          row: 5,
          col: 4,
          type: 'taken-f',
          pricing: 1,
          seatCode: 'sk',
        },
        {
          no: 16,
          row: 6,
          col: 1,
          type: 'taken-m',
          pricing: 1,
          seatCode: 'se',
        },
        {
          no: 17,
          row: 6,
          col: 3,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 18,
          row: 6,
          col: 4,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 19,
          row: 7,
          col: 1,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 20,
          row: 8,
          col: 1,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 21,
          row: 8,
          col: 3,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 22,
          row: 8,
          col: 4,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 23,
          row: 9,
          col: 1,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 24,
          row: 9,
          col: 3,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 25,
          row: 9,
          col: 4,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 26,
          row: 10,
          col: 1,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 27,
          row: 10,
          col: 3,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 28,
          row: 10,
          col: 4,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 29,
          row: 11,
          col: 1,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 30,
          row: 11,
          col: 3,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 31,
          row: 11,
          col: 4,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 32,
          row: 12,
          col: 1,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 33,
          row: 12,
          col: 3,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 34,
          row: 12,
          col: 4,
          type: 'available',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 35,
          row: 13,
          col: 1,
          type: 'available-m',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 36,
          row: 13,
          col: 3,
          type: 'available-m',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 37,
          row: 13,
          col: 4,
          type: 'available-m',
          pricing: 1,
          seatCode: 'mx',
        },
        {
          no: 38,
          row: 13,
          col: 2,
          type: 'available-m',
          pricing: 1,
          seatCode: 'mx',
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
