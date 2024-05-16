<template>
  <q-btn
    v-for="id in 10"
    :key="id"
    :to="`/home/user/${id}`"
    @click="getUserData(id)"
    >User {{ id }}</q-btn
  >

  <div v-if="isLoaded">
    <h3>Selam User#{{ activeUserId }}</h3>
    <pre>{{ userData }}</pre>
  </div>
  <div v-else><h3>Loading...</h3></div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
const router = useRoute();
import { useQuasar } from 'quasar';

const activeUserId = ref<number | string | null>(null);
const userData = ref({});

const isLoaded = computed(() => {
  return Object.keys(userData.value).length > 0;
});

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Cache-Control': 'no-cache',
  },
});

onMounted(async () => {
  activeUserId.value = Number(router.params.id);
  getUserData(activeUserId.value);
});

const getUserData = async (id: number) => {
  $q.loading.show();
  activeUserId.value = id;
  const response = await axiosInstance.get(`/users/${id}?_delay=3500`);
  userData.value = response.data;
  $q.loading.hide();
};

const $q = useQuasar();
</script>
