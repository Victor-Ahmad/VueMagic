<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-md-6">
        <h2 class="mb-0">How its work?</h2>
        <p>Our Web Design process is divided into four key stages:</p>
      </div>
      <b-row
        v-if="loading"
        class="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 text-center d-flex justify-content-center"
      >
        <b-col>
          <p class="mb-2 p-2 rounded text-white bg-primary">Loading ...</p>
        </b-col>
      </b-row>

      <b-row
        v-if="error"
        class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 text-center d-flex justify-content-center"
      >
        <b-col>
          <p class="mb-2 p-2 rounded text-white bg-primary">{{ error }}</p>
        </b-col>
      </b-row>
      <b-row class="g-4 g-lg-7" v-if="services">
        <b-col sm="6" md="3" v-for="(process, idx) in services?.service_processes || []" :key="idx">
          <div
            class="d-flex justify-content-center align-items-center text-center flex-column bg-transparent"
          >
            <div
              class="icon-lg bg-primary bg-opacity-10 text-primary rounded-3 fw-bold flex-shrink-0 mb-3"
            >
              0{{ idx + 1 }}
            </div>
            <h6>{{ process.name }}</h6>
            <p class="small mb-0" v-for="pro in process?.process_procedures || []" :key="pro">
              <span class="fw-bold text-primary"> {{ pro.name }}</span>
              :
              {{ pro.description }}
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row
        v-if="!services"
        class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 text-center d-flex justify-content-center"
      >
        <b-col>
          <p class="mb-2 p-2 rounded text-white bg-primary">No services available.</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { work } from '@/views/pages/about/ServiceSingle/data'
import { onMounted } from 'vue'
import { useServices } from '@/views/pages/about/ServiceSingle/Services/composables/service.ts'

const { services, loading, error, loadServices } = useServices()
const service_processes = services.service_processes
onMounted(() => {
  loadServices()
})
</script>
