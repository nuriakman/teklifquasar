<template>
  <q-page padding class="row">
    <q-form @submit="onSubmit" autocomplete="off">
      <h1>Offer Page</h1>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
const onSubmit = () => {
  console.log('submit');
};
</script>
