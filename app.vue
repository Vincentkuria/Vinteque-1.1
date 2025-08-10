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
