<template>
  <ul class="list-inline mb-3">
    <li class="list-inline-item me-0">
      <BIconStarFill class="text-warning" />
    </li>
    <li class="list-inline-item me-0">
      <BIconStarFill class="text-warning" />
    </li>
    <li class="list-inline-item me-0">
      <BIconStarFill class="text-warning" />
    </li>
    <li class="list-inline-item me-0">
      <BIconStarFill class="text-warning" />
    </li>
    <li class="list-inline-item me-0">
      <BIconStarHalf class="text-warning" />
    </li>
  </ul>
<!-- 
  <q class="lead heading-color">{{ testimonial.client_testimonial }}</q>

  <div class="d-sm-flex align-items-center mt-4">
    <div class="avatar flex-shrink-0">
      <img class="avatar-img rounded-circle" :src="testimonial.avatar" alt="avatar" />
    </div>

    <div class="ms-sm-3 mt-2 mt-sm-0">
      <span class="heading-color fw-semibold mb-0">{{ testimonial.client_name }}</span>
       <p class="mb-0 small">{{ testimonial.role }}</p> -->
    <!-- </div>
  </div> -->
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
// import type { TestimonialType } from '@/views/pages/about/AboutV4/Services/types/AboutType'
import { BIconStarFill, BIconStarHalf } from 'bootstrap-icons-vue'

// defineProps({
//   testimonial: {
//     type: Object as PropType<TestimonialType>,
//     required: true
//   }
// })
</script>
