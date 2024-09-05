<template>
  <q-list
    class="q-py-md flex flex-center"
    round
  >
    <q-btn
      v-close-popup
      no-caps
      square
      flat
      XXelevated
      color="white"
      @click="selectGender('m')"
      size="lg"
      text-color="blue"
      icon="man"
      XXclass="q-mr-sm"
      label="Erkek"
      style="font-size: 15px;"
    />
    <br>
    <q-btn
      v-close-popup
      no-caps
      square
      flat
      XXelevated
      color="white"
      @click="selectGender('f')"
      size="lg"
      text-color="pink"
      icon="woman"
      label="Kadın"
      style="font-size: 15px;"
    />

  </q-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const small = ref(false);
const selectedGender = ref('');

const selectGender = (gender: string) => {
  console.log(gender + ' seçildi');
  selectedGender.value = gender;
  small.value = false;
};
</script>
