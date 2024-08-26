<template>
  <section class="pt-0">
    <b-container>
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
      <b-row
        v-for="(item, idx) in about"
        :key="idx"
        class="rounded-3 position-relative overflow-hidden p-4 p-md-6"
        style="background-size: cover; background-position: center"
        :style="{ backgroundImage: `url('${bg5Img}')` }"
      >
        <div class="bg-overlay bg-dark bg-opacity-75"></div>

        <b-col>
          <b-row class="position-relative z-index-1">
            <b-col lg="4" class="mb-5 mb-lg-0">
              <div class="d-flex flex-column h-100">
                <ul class="list-group list-group-borderless mb-4">
                  <li class="list-group-item text-white fs-5 fw-semibold d-flex p-0">Innovate.</li>
                  <li class="list-group-item text-white fs-3 fw-semibold d-flex p-0">Elevate.</li>
                  <li class="list-group-item text-white fs-2 fw-semibold d-flex p-0">Succeed.</li>
                </ul>
              </div>
            </b-col>

            <b-col lg="8" xl="6" class="ms-auto">
              <b-card no-body class="p-4 p-sm-5">
                <b-card-header class="bg-transparent p-0">
                  <h5>Here our customers experience</h5>
                </b-card-header>

                <b-card-body class="p-0 pt-4">
                  <Swiper
                    :modules="[Autoplay, Pagination]"
                    :autoplay="{
                      delay: 2000
                    }"
                    :loop="true"
                    :spaceBetween="30"
                    :grabCursor="true"
                    :pagination="{
                      el: '.swiper-pagination',
                      clickable: true
                    }"
                  >
                    <SwiperSlide
                      v-for="(test, idx) in item.client_testimonial"
                      :key="idx"
                      class="pb-5"
                    >
                      <TestimonialCard :testimonial="test" />
                    </SwiperSlide>

                    <div class="swiper-pagination position-absolute bottom-0"></div>
                  </Swiper>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
// import { testimonials } from '@/views/pages/about/AboutV3/data'
import TestimonialCard from '@/views/pages/about/AboutV4/components/TestimonialCard.vue'
import bg5Img from '@/assets/images/bg/05.jpg'

import { onMounted } from 'vue'
import { useAbout } from '@/views/pages/about/AboutV4/Services/composables/about.ts'

const { about, loading, error, loadAbout } = useAbout()
onMounted(() => {
  loadAbout()
})
</script>
