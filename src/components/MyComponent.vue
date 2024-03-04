<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Cinsiyet?" color="primary" @click="small = true" />

    <q-dialog
      v-model="small"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card style="width: 250px">
        <q-card-section class="q-pt-none text-h5 text-center">
          15 Nolu Koltuk?
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
            icon="face"
            class="q-mr-sm hidden"
          />
          <q-btn
            rounded
            elevated
            @click="selectGender('f')"
            size="40px"
            Xfont-size="50px"
            color="white"
            text-color="pink"
            icon="face_3"
            class="q-mr-sm hidden"
          />
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
  </div>
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
