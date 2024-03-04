<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Radio Options" color="primary" @click="radio" />
  </div>
  <myComponent v-model="cinsiyet" />
</template>

<script setup>
import { useQuasar } from 'quasar';
import myComponent from 'src/components/MyComponent.vue';

const $q = useQuasar();
// radio();
function radio() {
  $q.dialog({
    title: 'Cinsiyet?',
    message: 'Lütfen seçiniz:',
    autoOk: true,
    options: {
      type: 'radio',
      model: 'opt1',
      items: [
        { label: 'Kadın', value: 'f', color: 'pink' },
        { label: 'Erkek', value: 'm', color: 'blue' },
      ],
    },
    cancel: false,
    persistent: true,
    onDismiss(val) {
      if (val === 'f' || val === 'm') {
        this.$q.dialog.hide();
      }
    },
  })
    .onOk((data) => {
      console.log('>>>> OK, received', data);
    })
    .onCancel(() => {
      console.log('>>>> Cancel');
    })
    .onDismiss(() => {
      console.log('I am triggered on both OK and Cancel');
    });
}
</script>
