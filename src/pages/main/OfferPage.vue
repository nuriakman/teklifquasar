<script setup lang="ts">
import { ref } from 'vue';
const onSubmit = () => {
  console.log('submit');
};
const text = ref('');
</script>

<template>
  <q-form @submit="onSubmit" autocomplete="off" autocapitalize="on">
    <q-page padding>
      <div class="row justify-center">
        <div class="row" style="max-width: 800px">
          <div class="text-h6 col-12">Yeni Teklif Yaz</div>
          <q-input
            filled
            v-model="text"
            label="Teklif No"
            class="q-mb-sm col-5"
          />
          <q-input
            filled
            v-model="text"
            label="Teklif Tarihi"
            class="q-mb-sm col-6 offset-1"
          />
          <q-input
            filled
            v-model="text"
            label="Başlık1"
            class="q-mb-sm col-12"
          />
          <q-input
            filled
            v-model="text"
            label="Başlık6"
            class="q-mb-sm col-6 q-pr-sm"
          />
          <q-input
            filled
            v-model="text"
            label="Başlık7"
            class="q-mb-sm col-6"
          />
          <q-input
            filled
            v-model="text"
            label="Firma Adı"
            class="q-mb-sm col-12"
          />
        </div>
      </div>

      <div class="row q-pt-xl">
        <div class="text-h6 col-12">Teklif Kalemleri</div>
      </div>

      <q-scroll-area style="height: 500px; max-width: 1200px">
        <div class="row q-pt-xl no-wrap">
          <div class="col-1">Sıra No</div>
          <div class="col-3">Ürün Adı</div>
          <div class="col-1">Miktarı</div>
          <div class="col-1">Birim Adı</div>
          <div class="col-1">Birim Fiyatı</div>
          <div class="col-1">Toplam</div>
          <div class="col-4">Resim</div>
        </div>

        <div class="row" v-for="i in 15" :key="i">
          <q-input
            dense
            outlined
            v-model="text"
            placeholder="Sıra No"
            class="col-1"
          />
          <q-input
            dense
            outlined
            v-model="text"
            placeholder="Ürün Adı"
            class="col-3"
          />
          <q-input
            dense
            outlined
            v-model="text"
            placeholder="Miktarı"
            class="col-1"
          />
          <q-input
            dense
            outlined
            v-model="text"
            placeholder="Birim Adı"
            class="col-1"
          />
          <q-input
            dense
            outlined
            v-model="text"
            placeholder="Birim Fiyatı"
            class="col-1"
          />
          <q-input
            dense
            outlined
            v-model="text"
            placeholder="Toplamı"
            class="col-1"
          />
          <q-input
            dense
            outlined
            v-model="text"
            placeholder="Pul Resim"
            class="col-4"
          />
        </div>
      </q-scroll-area>
    </q-page>
  </q-form>
</template>
