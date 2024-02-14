<script setup lang="ts">
const props = defineProps({
  text: String,
  number: String,
  icon: String,
});
</script>

<template>
  <q-card
    class="text-white"
    style="
      width: 100%;
      background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
    "
  >
    <q-card-section>
      <div class="row">
        <div class="col-10">
          <div class="text-h6">{{ props.text }}</div>
          <div class="text-h5">{{ props.number }}</div>
        </div>
        <div class="col-2">
          <q-icon size="62px" :name="props.icon" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
