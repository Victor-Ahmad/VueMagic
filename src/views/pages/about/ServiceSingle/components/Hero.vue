<template>
  <section
    class="bg-dark pt-lg-8 pt-xl-9"
    style="background-position: center left; background-size: cover"
    data-bs-theme="dark"
    :style="{ backgroundImage: `url('${bgpattern}')` }"
  >
    <b-container class="position-relative pt-4 pt-lg-0">
      <b-row class="align-items-center">
        <b-col md="7" xl="6">
          <h1 class="mb-4">Web Design</h1>
          <p class="mb-4">
            Our Web Design service is dedicated to crafting visually appealing, user-friendly, and
            responsive websites that align perfectly with your brand identity.
          </p>
        </b-col>

        <b-col md="4" class="ms-auto text-md-end">
          <router-link :to="{ name: 'contact.v1' }" class="btn btn-lg btn-primary mb-6 mb-md-0"
            >Start your project</router-link
          >
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { BIconPlayFill } from 'bootstrap-icons-vue'

import bg5Img from '@/assets/images/bg/05.jpg'
import bgpattern from '@/assets/images/elements/bg-pattern-2.png'
</script>
