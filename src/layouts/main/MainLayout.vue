<template>
  <q-layout view="hHh Lpr LFf">
    <q-header elevated>
      <q-toolbar class="glossy">
        <q-btn flat to="/home">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
        </q-btn>
        <q-toolbar-title> Teklif Yaz </q-toolbar-title>
        <div class="gt-sm">
          <q-btn class="q-mr-sm" flat icon="man" to="/home/test" label="Test" />
          <q-btn
            class="q-mr-sm"
            flat
            icon="info"
            to="/home/offer"
            label="Teklif Ver"
          />
          <q-btn
            class="q-mr-sm"
            outline
            rounded
            icon="login"
            to="/home/logout"
            label="Çıkış Yap"
          />
        </div>
        <q-btn
          class="lt-md"
          flat
          @click="drawer = !drawer"
          label="menu"
          icon="menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="500"
      overlay
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>sayfa sonu </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false);

const menuList = [
  {
    icon: 'inbox',
    label: 'BoşMenü',
    separator: true,
  },
  {
    icon: 'send',
    label: 'BoşMenü',
    separator: false,
  },
  {
    icon: 'delete',
    label: 'BoşMenü',
    separator: false,
  },
  {
    icon: 'error',
    label: 'BoşMenü',
    separator: true,
  },
  {
    icon: 'settings',
    label: 'BoşMenü',
    separator: false,
  },
  {
    icon: 'feedback',
    label: 'BoşMenü',
    separator: false,
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'BoşMenü',
    separator: false,
  },
];
</script>
