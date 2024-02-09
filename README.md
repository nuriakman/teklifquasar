# Ayarlar

- `quasar.config.js` dosyasında
  - `vueRouterMode: 'history'`
  - `plugins: [ 'Notify', 'Dialog' ]`

## Plugin Kullanımı:

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
