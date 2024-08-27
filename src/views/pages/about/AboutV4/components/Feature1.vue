<template>
  <section class="pt-0">
    <b-container class="px-4">
      <b-row v-for="(item, idx) in about" :key="idx">
        <b-col>
          <h1>{{ item.title_steps_process }}</h1>
        </b-col>

        <div
          class="bg-dark rounded-3 position-relative overflow-hidden p-4 p-sm-5"
          data-bs-theme="dark"
        >
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
          <b-row class="position-relative" v-if="item.steps_process">
            <b-col
              lg="6"
              class="ms-auto mb-6 mb-lg-0 order-lg-2"
              v-for="(step, id) in item.steps_process"
              :key="id"
            >
              <div class="d-sm-flex">
                <div class="ms-sm-4">
                  <ul>
                    <li>
                      <h6>{{ step.process_name }}</h6>
                      <p>
                        {{ step.process_description }}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
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
        </div>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAbout } from '@/views/pages/about/AboutV4/Services/composables/about.ts'

const { about, loading, error, loadAbout } = useAbout()
onMounted(() => {
  loadAbout()
})
</script>
