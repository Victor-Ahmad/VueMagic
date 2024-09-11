<template>
  <section>
    <b-container>
      <b-row class="align-items-center g-4 mb-4 mb-sm-5">
        <b-col md="6" lg="5">
          <h2 class="mb-0">Our Comprehensive Services</h2>
        </b-col>
        <b-col md="4" class="ms-auto text-md-end">
          <b-button variant="dark" type="button">
            <router-link class="text-white" :to="{ name: 'contact.v1' }">
              Contact us now
            </router-link>
          </b-button>
        </b-col>
      </b-row>

      <b-row class="g-4 g-md-5">
        <b-col lg="6" v-for="(service, idx) in services" :key="idx">
          <ServiceCard :service="service" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { services } from '@/views/pages/about/ServicesV3/data'
import ServiceCard from '@/views/pages/about/ServicesV3/components/ServiceCard.vue'
</script>
