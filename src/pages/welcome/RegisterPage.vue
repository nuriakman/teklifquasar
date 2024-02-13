<template>
  <q-page class="row items-center justify-evenly">
    <q-form @submit="onSubmit">
      <q-card class="my-card q-pa-xl" bordered>
        <q-card-section>
          <div class="text-h6">Kayıt Ol</div>
          <div class="text-subtitle2">Lütfen bilgilerinizi giriniz</div>
        </q-card-section>

        <q-input class="q-pb-md" v-model="username" label="Adınız Soyadınız">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>

        <q-input class="q-pb-md" v-model="username" label="ePosta Adresiniz">
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>

        <q-input
          class="q-pb-md"
          v-model="username"
          label="Cep Telefon Numaranız"
        >
          <template v-slot:prepend>
            <q-icon name="phone" />
          </template>
        </q-input>

        <q-input
          class="q-pb-md"
          v-model="userpass"
          :type="isPwd ? 'password' : 'text'"
          label="Şifreniz"
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </q-card>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
const $q = useQuasar();

const isPwd = ref(true);
const username = ref('');
const userpass = ref('');
const accept = ref(false);

function onSubmit() {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You need to accept the license and terms first',
    });
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted',
    });
  }
}
</script>
