# Ayarlar

## Komutlar

```bash
# Quasar projesine başla
npm init quasar

# Proje dizinindeki dosyaların formatını düzelt
npm run format

# Sunucuyu Başlat
quasar dev
```

## **quasar.config.js** Dosyasında yapılan değişiklikler

- `vueRouterMode: 'history'`
- `plugins: [ 'Notify', 'Dialog', 'AppFullscreen', 'Cookies', 'Loading', 'LocalStorage', 'SessionStorage' ]`

## QTable

`:columns="columns"` kodu için TS uyarısı alırsak düzeltmek için `QTableColumn` kullanılır

```js
<q-table
  :rows="rows"
  :columns="columns"
/>

import type { QTableColumn } from 'quasar';
const columns: QTableColumn[] = [
```

## Form

```html
.myContainer { display: grid; grid-gap: 20px; grid-template-columns: 1fr 4fr; }

<q-form action="https://some-url.com" method="post" @submit.prevent="onSubmit">
  <!-- ... -->
</q-form>
```

## CSS

**Ekran ölcüsü küçüldüğünde gizleme**

```HTML
<h1 :class="{ hidden: $q.screen.lt.lg ? 'none' : '' }">Küçük ekranda gizlecek başlık</h1>
<script setup lang="ts">
import { useQuasar } from 'quasar';
const $q = useQuasar();
</script>
```

**Sayfa ortasına getirme:**

```JS
  <q-page class="row items-center justify-evenly">
    <h1>Selam</h1>
  </q-page>
```

## Plugin Kullanımı:

### Meta

```JS

```

### LocalStorage ve SessionStorage

```JS
import { useQuasar } from 'quasar';
const $q = useQuasar();

$q.localStorage.set('mykey_localStorage', 'myvalue_localStorage');
const value = $q.localStorage.getItem('mykey_localStorage');
console.log(value);

$q.sessionStorage.set('mykey_sessionStorage', 'myvalue_sessionStorage');
const otherValue = $q.sessionStorage.getItem('mykey_sessionStorage');
console.log(otherValue);

```

### Loading

```JS
import { useQuasar } from 'quasar';
const $q = useQuasar();
$q.loading.show({
  delay: 1000, // ms
});
setTimeout(() => {
  $q.loading.hide();
}, 2000);
```

### Cookie

```JS
import { Cookies } from 'quasar';

Cookies.set('cookie_name', 'Merhaba');
console.log(Cookies.get('cookie_name') + ' Dünya');
```

### Dialog

```JS
import { useQuasar } from 'quasar';
const $q = useQuasar();

function alert () {
  $q.dialog({
    title: 'Başlık',
    message: 'Mesaj'
  }).onOk(() => {
    alert("Tamam basıldı")
  }).onCancel(() => {
    alert("Vazgeç basıldı")
  }).onDismiss(() => {
    // console.log('I am triggered on both OK and Cancel')
  })
}
```

### Notify

```JS
import { useQuasar } from 'quasar';
const $q = useQuasar();
$q.notify('Merhaba Dünya!');
```

# URL'den parametre alarak kullanma

### Router Tanımı

```js
{
  path: '/offers',
  name: 'offerList',
  component: OffersView,
  meta: {
    requiresAuth: true,
    title: 'Teklif Listesi'
  }
},
{
  path: '/offer/edit/:id',
  name: 'offerEdit',
  component: OfferEditView,
  meta: {
    requiresAuth: true,
    title: 'Teklif Düzenle'
  }
},

```

### OfferEditView Component'ı İçinden Kullanım

```js
<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Item } from '@/types/types'

export interface Item {
  id: number
  firmaadi: string
}


const $router = useRouter()
const item = ref<Item | null>(null)

onMounted(() => {
  axios
    .post('/index.php', {
      method: 'get-teklif',
      id: $router.currentRoute.value.params.id
    })
    .then(function (response) {
      if (response.data.success) {
        item.value = response.data.item
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})
</script>
```

# ref ile html element'e erişim

```html
<script setup>
  import { ref } from 'vue';
  const myinput = ref('');

  function onClickBtn() {
    console.log(myinput.value.offsetTop);
    console.log(myinput.value); // document.querySelector() 'e karşılık geliyor!
  }
</script>

<template>
  <input ref="myinput" />
  <button @click.prevent="onClickBtn()">My Button</button>
</template>
```

### `npm run format` komutunun projeye eklenmesi

```JS
// Projeye prettier ekleyelim
npm i prettier

// Prettier'i global olarak yükleyelim
npm i -g prettier

// package.json dosyasına "format"  satırını ekleyelim
"scripts": {
    "test": "echo \"No test specified\" && exit 0",
    "dev": "quasar dev",
    "build": "quasar build",
    "format": "prettier --write src/"
  },
```

# Quasar App (teklifquasar)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
