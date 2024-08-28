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
      <b-row v-if="about && about.length">
        <b-col md="4" class="mb-4 mb-md-0" v-for="(item, idx) in about" :key="idx">
          <p class="text-black">{{ item.meet_our_team }}</p>

          <div class="d-flex gap-3 position-relative mt-md-5">
            <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev-team">
              <BIconArrowLeft />
            </a>
            <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next-team">
              <BIconArrowRight />
            </a>
          </div>
        </b-col>

        <b-col md="8">
          <Swiper
            class="mt-2 mt-md-4"
            :modules="[Autoplay, Navigation]"
            :spaceBetween="40"
            :autoplay="{
              delay: 2000
            }"
            :loop="true"
            :navigation="{
              nextEl: '.swiper-button-next-team',
              prevEl: '.swiper-button-prev-team'
            }"
            :breakpoints="{
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 }
            }"
          >
            <SwiperSlide v-for="(item, idx) in team" :key="idx">
              <b-card no-body class="card-img-scale bg-transparent overflow-hidden">
                <div class="card-img-scale-wrapper rounded-3">
                  <img :src="item.avatar" class="img-scale" alt="card img" />
                </div>

                <b-card-body class="text-center px-0 pb-0">
                  <h6 class="mb-0">
                    <a href="#" class="stretched-link">{{ item.username }}</a>
                  </h6>
                  <small>{{ item.role }}</small>
                </b-card-body>
              </b-card>
            </SwiperSlide>
          </Swiper>
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
import { Autoplay, Navigation } from 'swiper/modules'
import { team } from '@/views/pages/about/AboutV3/data'
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-icons-vue'
import { onMounted } from 'vue'
import { useAbout } from '@/views/pages/about/AboutV4/Services/composables/about.ts'

const { about, loading, error, loadAbout } = useAbout()
onMounted(() => {
  loadAbout()
})
</script>
