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
          <h1 class="mb-4">UI/UX Design</h1>
          <p class="mb-4">
            Our UI/UX Design service is all about crafting user experiences that are both visually
            compelling and highly intuitive. We focus on creating interfaces that resonate with your
            audience, ensuring that every interaction with your product is seamless and engaging.
            From the initial concept to the final design, our work enhances usability and elevates
            the user experience. Get the experts you need for the growth you want. Access top talent
            in user interface and experience design to elevate your digital products.
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
