<template>
  <b-card no-body class="card-img-scale bg-transparent overflow-hidden mb-6 mb-xl-8">
    <b-row class="g-xl-6 align-items-center">
      <b-col lg="6">
        <div class="card-img-scale-wrapper rounded-2 h-100">
          <img :src="item.image" class="img-scale" alt="portfolio-img" />
        </div>
      </b-col>

      <b-col lg="6">
        <b-card-body class="h-100 px-0 p-xl-5">
          <b-card-title>{{ item.title }}</b-card-title>
          <p class="card-text mb-3 mb-lg-4">{{ item.description }}</p>
          <div class="d-flex justify-content-lg-end flex-lg-column flex-wrap mb-3 mb-lg-4">
            <router-link
              :to="{ name: 'portfolio.case-study.v1' }"
              class="text-primary-hover stretched-link heading-color mb-0"
              >View case study <font-awesome-icon :icon="faArrowRightLong" class="fa-fw ms-1"
            /></router-link>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { type Project } from '../Services/types/ProjectsType'

defineProps({
  item: {
    type: Object as PropType<Project>,
    required: true
  }
})

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
</script>
