<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated>
      <q-toolbar class="glossy">
        <q-btn flat to="/">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
        </q-btn>
        <q-toolbar-title> Teklif Yaz </q-toolbar-title>
        <q-btn no-caps flat icon="home" to="/" label="Ana Sayfa" />
        <q-btn no-caps flat icon="info" to="/about" label="Hakkımızda" />
        <q-btn no-caps flat icon="person" to="/register" label="Üye Ol" />
        <q-btn no-caps flat icon="login" to="/login" label="Giriş Yap" />
      </q-toolbar>
    </q-header>

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

<script setup lang="ts"></script>
