<template>
  <div>
    <q-btn
      color="primary"
      label="1"
      @click="tahminAl('1')"
      :disable="tahmin.length == limit"
    />
    <q-btn
      color="primary"
      label="2"
      @click="tahminAl('2')"
      :disable="tahmin.length == limit"
    />
    <q-btn
      color="primary"
      label="3"
      @click="tahminAl('3')"
      :disable="tahmin.length == limit"
    />
    <q-btn
      color="primary"
      label="4"
      @click="tahminAl('4')"
      :disable="tahmin.length == limit"
    />
    <q-btn
      color="primary"
      label="5"
      @click="tahminAl('5')"
      :disable="tahmin.length == limit"
    />
    <q-btn
      color="red"
      label="SİL"
      @click="tahminAl('SİL')"
      :disable="tahmin.length == 0"
    />
    <q-btn
      color="secondary"
      label="TAMAM"
      @click="tahminAl('TAMAM')"
      :disable="tahmin.length != limit"
    />
  </div>
  <hr />
  <h1>Tahmin: "{{ tahmin }}"</h1>
</template>

<script setup>
import { ref } from 'vue';

const tahmin = ref('');
const limit = 5;

function tahminAl(harf) {
  if (harf == 'TAMAM') {
    if (tahmin.value.length == limit) {
      alert('Tahmininiz: ' + tahmin.value);
    }
    return;
  }
  if (harf == 'SİL') {
    if (tahmin.value.length > 0) {
      tahmin.value = tahmin.value.slice(0, -1);
    }
    return;
  }
  if (tahmin.value.length < limit) {
    tahmin.value = tahmin.value + harf;
  }
}
</script>
