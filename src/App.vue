<template>
  <Navbar />
  <RouterView />
  <BackToTop />
  <Footer />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BackToTop from '@/components/BackToTop.vue'

// import configureFakeBackend from '@/helpers/fake-backend'

import { useLayoutStore } from '@/stores/layout'
import Navbar from '@/components/navbar/BlogNavbar.vue'
import Footer from '@/components/footer/Footer9.vue'
// configureFakeBackend()
const useLayout = useLayoutStore()
useLayout.setTheme(useLayout.theme)
</script>
