<!-- <template>
  <section class="pb-0" id="services">
    <b-container>
      <div class="inner-container text-center mb-4 mb-sm-6">
        <h2 class="mb-0">Our Comprehensive Services</h2>
      </div>

      <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <b-col v-for="(service, idx) in services" :key="idx">
          <ServiceCard :service="service" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { services } from '@/views/demos/CreativeAgency/data'
import ServiceCard from '@/views/demos/CreativeAgency/components/ServiceCard.vue'
</script> -->

<template>
  <section class="pb-0" id="services">
    <b-container>
      <div class="inner-container text-center mb-4 mb-sm-6">
        <h2 class="mb-0">Our Comprehensive Services</h2>
      </div>

      <b-row v-if="loading" class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <b-col>
          <p>Loading services...</p>
        </b-col>
      </b-row>

      <b-row v-if="error" class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <b-col>
          <p>{{ error }}</p>
        </b-col>
      </b-row>

      <b-row v-if="services && services.length" class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <b-col v-for="(service, idx) in services" :key="idx">
          <ServiceCard :service="service" />
        </b-col>
      </b-row>

      <b-row v-if="services && !services.length" class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <b-col>
          <p>No services available.</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useServices } from '@/views/demos/CreativeAgency/Services/composables/service'
import ServiceCard from '@/views/demos/CreativeAgency/components/ServiceCard.vue'

const { services, loading, error, loadServices } = useServices()

onMounted(() => {
  loadServices()
})
</script>

<!-- 
<template>
  <section class="pb-0" id="services">
    <b-container>
      <div class="inner-container text-center mb-4 mb-sm-6">
        <h2 class="mb-0">Our Comprehensive Services</h2>
      </div>

      <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <b-col v-for="service in data.services" :key="service.id">
          <b-card no-body class="card-hover-shadow border h-100 p-4">
            <b-card-body class="p-0">
              <h5 class="mb-3">{{ service.name }}</h5>
              <p>{{ service.description }}</p>
            </b-card-body>

            <b-card-footer class="mt-auto p-0 pt-2"> Learn More </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import type { Service } from '@/types'

const data = reactive({
  services: [] as Service[]
})

onMounted(() => {
  axios
    .get('https://phplaravel-1239567-4810643.cloudwaysapps.com/api/services')
    .then((response) => {
      console.log('result :', response.data)
      if (response.data.success) {
        data.services = response.data.result
      } else {
        console.error('Failed to fetch :', response.data.message)
      }
    })
    .catch((err) => {
      console.error('Error fetching services:', err)
    })
})

console.log('result :', data.services)
</script> -->

<!-- <template>
  <section class="pb-0" id="services">
    <b-container>
      <div class="inner-container text-center mb-4 mb-sm-6">
        <h2 class="mb-0">Our Comprehensive Services</h2>
      </div>

      <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <b-col v-for="service in data.services" :key="service.id">
          <b-card no-body class="card-hover-shadow border h-100 p-4">
            <b-card-body class="p-0">
              <h5 class="mb-3">{{ service.name }}</h5>
              <p>{{ service.description }}</p>
            </b-card-body>

            <b-card-footer class="mt-auto p-0 pt-2"> Learn More </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
const data = reactive({
  services: []
})
fetch('https://phplaravel-1239567-4810643.cloudwaysapps.com/api/services')
  .then((res) => res.json())
  .then((items) => {
    data.services = items.result
    console.log('result :', items)
  })
</script> -->
