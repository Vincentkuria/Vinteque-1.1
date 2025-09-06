<script setup lang="ts">
import { NuxtPage } from '#components';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div>
    <Navbar />
    <div>
      <NuxtPage/>
    </div>
    <Footer />
  </div>
</template>

<style>
.v-html ul{
  list-style: square;
  list-style-position: inside;
  padding-left: 3rem;
}
</style>
