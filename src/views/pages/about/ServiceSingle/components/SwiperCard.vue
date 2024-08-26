<template>
  <div class="avatar avatar-lg mb-3">
    <img class="avatar-img rounded-circle" :src="testimonial.avatar" alt="avatar" />
  </div>

  <ul class="list-inline mb-3 hstack gap-1">
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

  <p class="fs-5 heading-color">"{{ testimonial.client_testimonial }}"</p>

  <div class="blockquote-footer mb-0 fs-6 mt-3">
    {{ testimonial.client_name }}
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { PricingType } from '@/views/pages/about/ServiceSingle/Services/types/ServiceType'
import { BIconStarFill, BIconStarHalf } from 'bootstrap-icons-vue'

defineProps({
  testimonial: {
    type: Object as PropType<PricingType>,
    required: true
  }
})
</script>
