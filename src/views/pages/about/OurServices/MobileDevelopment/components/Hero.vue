<template>
  <section
    class="bg-dark pt-lg-8 pt-xl-9"
    style="background-position: center left; background-size: cover"
    data-bs-theme="dark"
    :style="{ backgroundImage: `url('${bgpattern}')` }"
  >
    <b-container class="position-relative pt-2 pt-lg-0">
      <b-row class="align-items-center">
        <b-col md="7" xl="6">
          <h1 class="mb-4">Mobile Development</h1>
          <p class="mb-4">
            In today's mobile-first world, having a robust and engaging mobile application is
            crucial for reaching your audience. Our Mobile Development service is designed to create
            custom apps that not only meet your business needs but also provide an exceptional user
            experience. Whether it's iOS, Android, or cross-platform, we build mobile solutions that
            are secure, scalable, and aligned with your brand.
          </p>
        </b-col>

        <b-col md="4" class="ms-auto text-md-end">
          <router-link :to="{ name: 'contact.v1' }" class="btn btn-lg btn-primary mb-6 mb-md-0">
            Start your project
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import bgpattern from '@/assets/images/elements/bg-pattern-2.png'
</script>
