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
          <h1 class="mb-4">Marketing Solutions</h1>
          <p class="mb-4">
            Our Marketing Solutions service is all about creating strategies that connect your brand
            with the right audience. We offer tailored marketing plans that drive engagement, build
            brand loyalty, and generate measurable results. Whether you’re launching a new product,
            seeking to improve your online presence, or aiming to increase sales, our team delivers
            creative, data-driven campaigns that align with your business goals. Get the experts you
            need for the growth you want. Access top talent in digital marketing, content creation,
            and campaign management.
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
