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
