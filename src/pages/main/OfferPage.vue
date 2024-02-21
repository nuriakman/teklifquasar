<script setup lang="ts">
import { ref } from 'vue';
const onSubmit = () => {
  console.log('submit');
};
const text = ref('');
</script>

<template>
  <div class="row justify-center">
    <q-page padding style="max-width: 800px">
      <div class="text-h6 col-12">Yeni Teklif Yaz</div>
      <q-form @submit="onSubmit" autocomplete="off" autocapitalize="on">
        <div class="row">
          <q-input v-model="text" label="Teklif No" class="col-5" />
          <q-input
            v-model="text"
            label="Teklif Tarihi"
            class="col-6 offset-1"
          />
          <q-input v-model="text" label="Başlık1" class="col-12" />
          <q-input v-model="text" label="Başlık6" class="col-6 q-pr-sm" />
          <q-input v-model="text" label="Başlık7" class="col-6" />
          <q-input v-model="text" label="Firma Adı" class="col-12" />
        </div>
      </q-form>
    </q-page>
  </div>

  <q-page padding class="row justify-evenly hidden">
    <q-card class="q-pa-sm col-6">
      <q-form @submit="onSubmit" autocomplete="off" autocapitalize="on">
        <div class="text-h6">Yeni Teklif Yaz 2</div>
        <div class="q-pa-md">
          <div class="q-gutter-md" style="max-width: 100%">
            <q-input v-model="text" label="Standard" />
          </div>
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>
