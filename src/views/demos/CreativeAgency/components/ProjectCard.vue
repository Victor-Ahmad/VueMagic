<!-- <template>
  <b-card no-body class="card-element-hover card-metro-hover">
    <img :src="project.image" alt="portfolio-img" />

    <div class="card-img-overlay hover-element d-flex">
      <div class="card-text mt-auto">
        <h6 class="mb-0">
          <router-link v-if="project.route" :to="project.route" class="text-white stretched-link">{{
            project.name
          }}</router-link>
        </h6>
        <small class="text-white">{{ project.category }}</small>
      </div>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { RecentProjectType } from '@/views/demos/CreativeAgency/data'

defineProps({
  project: {
    type: Object as PropType<RecentProjectType>,
    required: true
  }
})
</script> -->

<template>
  <b-card no-body class="card-hover-shadow border h-100">
    <img class="img" :src="project.image" alt="portfolio-img" />
    <div class="mt-3">
      <h6 class="mb-0">
        <router-link
          v-if="project.route"
          :to="project.route"
          class="text-white stretched-link"
        ></router-link>
      </h6>
      <p class="text-center font-weight-regular">{{ project.name }}</p>
      <p class="text-black text-center">{{ project.category }}</p>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { RecentProjectType } from '@/views/demos/CreativeAgency/data'

defineProps({
  project: {
    type: Object as PropType<RecentProjectType>,
    required: true
  }
})
</script>
<style scoped>
.img {
  height: 250px;
  width: 100%;
}
</style>
