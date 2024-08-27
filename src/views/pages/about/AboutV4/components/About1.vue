<template>
  <section class="bg-dark pt-sm-8 pb-9" data-bs-theme="dark">
    <b-container class="pt-4 pt-sm-0">
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

      <b-row class="g-4 g-xxl-5" v-if="about && about.length">
        <b-col lg="8" v-for="(item, idx) in about" :key="idx">
          <h1 class="mb-0 lh-base">{{ item.company_name }}</h1>
          <p class="mb-0 mt-4">
            {{ item.introduction }}
          </p>
        </b-col>
        <b-col lg="4" xl="3" class="ms-auto position-relative">
          <ul class="list-group list-group-borderless mb-4">
            <li
              v-for="item in list"
              :key="item"
              class="list-group-item d-flex heading-color pb-0 icons-center"
            >
              <BIconPatchCheck class="text-primary me-2" />{{ item }}
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
import { list } from '@/views/pages/about/AboutV1/data'
import { BIconPatchCheck } from 'bootstrap-icons-vue'
import { onMounted } from 'vue'
import { useAbout } from '@/views/pages/about/AboutV4/Services/composables/about.ts'

const { about, loading, error, loadAbout } = useAbout()
onMounted(() => {
  loadAbout()
})
</script>
