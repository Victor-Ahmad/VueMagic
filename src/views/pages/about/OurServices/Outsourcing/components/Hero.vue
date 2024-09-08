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
          <h1 class="mb-4">Outsourcing</h1>
          <p class="mb-4">
            Our Outsourcing service is designed to provide your business with the expertise and
            resources needed for growth. Whether you require specialized skills for a short-term
            project or ongoing support for critical operations, we connect you with top talent
            across various roles and technologies. By choosing our Outsourcing service, you gain
            access to professionals who seamlessly integrate with your team, helping you achieve
            your business goals while optimizing efficiency and reducing costs. Get the experts you
            need for the growth you want. Access top talent in any technology and role you require.
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
