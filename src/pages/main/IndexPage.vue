<template>
  <q-page padding>
    <div class="row items-start q-gutter-md no-wrap">
      <dashHeader text="Hedef" number="140" icon="person" />
      <dashHeader text="Üye" number="750" icon="lock" />
      <dashHeader text="Satış" number="400" icon="money" />
      <dashHeader
        text="Gizlenecek"
        number="400"
        icon="money"
        :class="{ hidden: $q.screen.lt.lg ? 'none' : '' }"
      />
    </div>
    <h1>Main IndexPage11 {{ $q.screen.width }}</h1>
  </q-page>
</template>

<script setup lang="ts">
import dashHeader from 'src/components/dashHeader.vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
</script>
