<template>
  <div class="q-pa-md">
    <div class="q-mb-sm">
      <q-badge color="teal"> DATE Model: {{ date }} </q-badge>
    </div>

    <q-date v-model="proxyDate">
      <div class="row items-center justify-end q-gutter-sm">
        <q-btn label="Cancel" color="primary" flat v-close-popup />
        <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
      </div>
    </q-date>
  </div>

  <h1>proxyDate: {{ proxyDate }}</h1>
  <h1>date: {{ date }}</h1>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const date = ref('2019/03/01');
    const proxyDate = ref('2019/03/01');

    return {
      date,
      proxyDate,

      updateProxy() {
        proxyDate.value = date.value;
      },

      save() {
        date.value = proxyDate.value;
      },
    };
  },
};
</script>
