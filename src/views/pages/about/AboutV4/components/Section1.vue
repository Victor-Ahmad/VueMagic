<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4 align-items-center" v-for="(item, idx) in about" :key="idx">
        <b-col lg="6" class="order-lg-1 order-2">
          <b-row class="g-xl-5">
            <b-col md="6" v-for="(item, idx) in feature" :key="idx">
              <b-card no-body class="bg-light p-4" :class="idx == feature.length - 1 ? 'mt-5' : ''">
                <figure class="text-primary mb-3 flex-shrink-0">
                  <span v-html="item.icon" />
                </figure>
                <h6>{{ item.title }}</h6>
                <p class="mb-0">{{ item.description }}</p>
              </b-card>

              <b-card no-body class="bg-light p-4 mt-5">
                <figure class="text-primary mb-3 flex-shrink-0">
                  <span v-html="item.icon1" />
                </figure>
                <h6>{{ item.title1 }}</h6>
                <p class="mb-0">{{ item.description1 }}</p>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
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
        <b-col
          lg="6"
          class="ps-xl-7 order-lg-2 order-1"
          v-for="(service, id) in item.for_who_services"
          :key="id"
        >
          <h2 class="mb-4">{{ item.title_for_who }}</h2>
          <ul>
            <li>
              <h6>{{ service.name_of_service_for_who }}</h6>
              <p>
                {{ service.description_of_service_for_who }}
              </p>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row
        v-if="!about"
        class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 text-center d-flex justify-content-center"
      >
        <b-col>
          <p class="mb-2 p-2 rounded text-white bg-primary">No data available.</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { feature } from '@/views/pages/about/AboutV2/data'
import { onMounted } from 'vue'
import { useAbout } from '@/views/pages/about/AboutV4/Services/composables/about.ts'

const { about, loading, error, loadAbout } = useAbout()
onMounted(() => {
  loadAbout()
})
</script>

<style>
@media (max-width: 375px) {
  .order-lg-1 {
    order: 2 !important;
  }

  .order-lg-2 {
    order: 1 !important;
  }
}
</style>
