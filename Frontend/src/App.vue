<script setup>
import { RouterView } from 'vue-router';
import NavbarComp from './components/NavbarComp.vue';

// import { PiniaStore } from './Store/Store.js';
// const store = PiniaStore();
</script>

<template>
  <NavbarComp></NavbarComp>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style></style>
