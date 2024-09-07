<template>
  <section class="pb-0">
    <b-container data-sticky-container>
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
      <b-row>
        <b-col lg="4" class="mb-5">
          <CustomStickyElement data-sticky data-margin-top="80" data-sticky-for="576">
            <h2 class="mb-4">Web Design Requirements</h2>
            <p class="mb-4">
              To get started with our Web Design service, we will need the following:
            </p>
          </CustomStickyElement>
        </b-col>

        <b-col lg="8" class="ps-xl-7">
          <b-row class="g-4 g-sm-5" v-if="services">
            <b-col md="6" v-for="requirement in services?.requirments || []" :key="requirement">
              <b-card no-body class="border bg-light p-5" style="height: 250px">
                <b-card-body class="p-0">
                  <h5 class="mb-2">
                    <router-link :to="{ name: 'services.single' }" class="stretched-link">{{
                      requirement.name
                    }}</router-link>
                  </h5>
                  <p class="mb-0">{{ requirement.description }}</p>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
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
import CustomStickyElement from '@/components/CustomStickyElement.vue'
import { onMounted } from 'vue'
import { useServices } from '@/views/pages/about/ServiceSingle/Services/composables/service.ts'

const { services, loading, error, loadServices } = useServices()
const requirements = services.requirments
onMounted(() => {
  loadServices()
})
</script>
