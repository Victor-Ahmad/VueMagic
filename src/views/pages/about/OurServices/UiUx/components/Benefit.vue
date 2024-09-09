<template>
  <section class="pb-0">
    <b-container>
      <b-row>
        <b-col lg="6" class="mb-6 mb-lg-0">
          <b-card no-body class="bg-dark overflow-hidden p-sm-4 h-100" data-bs-theme="dark">
            <b-card-header class="bg-transparent position-relative mb-3">
              <h3 class="mb-3">Who Could Benefit from This Service</h3>
              <p>Our UI/UX Design service is ideal for businesses that want to:</p>

              <b-list-group class="list-group-borderless border-0 card-body bg-light border p-md-5">
                <b-list-group-item
                  v-for="list in approach"
                  :key="list"
                  class="heading-color d-flex mb-0"
                >
                  <span class="flex-centered">
                    <BIconPatchCheck class="text-primary me-2" />
                  </span>
                  {{ list }}
                </b-list-group-item>
              </b-list-group>
            </b-card-header>
          </b-card>
        </b-col>
        <b-col lg="6" class="ms-auto">
          <b-card no-body class="border p-4 overflow-hidden p-sm-4 h-100">
            <p class="mb-2">Services We Provide:</p>
            <ul class="list-group list-group-borderless my-3">
              <li class="list-group-item heading-color d-flex pb-0 icons-center my-2">
                <BIconPatchCheckFill class="me-2" />
                User Research & Analysis
              </li>
              <li class="list-group-item heading-color d-flex pb-0 icons-center">
                <BIconPatchCheckFill class="me-2" />
                Wireframing & Prototyping
              </li>
              <li class="list-group-item heading-color d-flex pb-0 icons-center my-2">
                <BIconPatchCheckFill class="me-2" />
                Visual Design
              </li>
              <li class="list-group-item heading-color d-flex pb-0 icons-center">
                <BIconPatchCheckFill class="me-2" />
                User Flow & Information Architecture
              </li>
              <li class="list-group-item heading-color d-flex pb-0 icons-center my-2">
                <BIconPatchCheckFill class="me-2" />
                Usability Testing
              </li>
              <li class="list-group-item heading-color d-flex pb-0 icons-center">
                <BIconPatchCheckFill class="me-2" />
                Interaction Design
              </li>
              <li class="list-group-item heading-color d-flex pb-0 icons-center my-2">
                <BIconPatchCheckFill class="me-2" />
                Responsive Design
              </li>
              <li class="list-group-item heading-color d-flex pb-0 icons-center mb-5">
                <BIconPatchCheckFill class="me-2" />
                Design System Development
              </li>
            </ul>
            <b-card no-body class="border p-4 overflow-hidden p-sm-4 mt-5">
              <p class="mb-2">Roles We Provide:</p>
              <ul class="list-group list-group-borderless my-3">
                <li class="list-group-item heading-color d-flex pb-0 icons-center my-2">
                  <BIconPatchCheckFill class="me-2" />
                  UI/UX Designer
                </li>
                <li class="list-group-item heading-color d-flex pb-0 icons-center">
                  <BIconPatchCheckFill class="me-2" />
                  User Researcher
                </li>
                <li class="list-group-item heading-color d-flex pb-0 icons-center my-2">
                  <BIconPatchCheckFill class="me-2" />
                  Interaction Designer
                </li>
                <li class="list-group-item heading-color d-flex pb-0 icons-center">
                  <BIconPatchCheckFill class="me-2" />
                  Visual Designer
                </li>
                <li class="list-group-item heading-color d-flex pb-0 icons-center my-2">
                  <BIconPatchCheckFill class="me-2" />
                  Information Architect
                </li>
                <li class="list-group-item heading-color d-flex pb-0 icons-center">
                  <BIconPatchCheckFill class="me-2" />
                  Usability Analyst
                </li>
                <li class="list-group-item heading-color d-flex pb-0 icons-center my-2">
                  <BIconPatchCheckFill class="me-2" />
                  Front-End Developer
                </li>
                <li class="list-group-item heading-color d-flex pb-0 icons-center">
                  <BIconPatchCheckFill class="me-2" />
                  Prototype Specialist
                </li>
                <li class="list-group-item heading-color d-flex pb-0 icons-center">
                  <BIconPatchCheckFill class="me-2" />
                  Design System Manager
                </li>
                <li class="list-group-item heading-color d-flex pb-0 icons-center">
                  <BIconPatchCheckFill class="me-2" />
                  Accessibility Specialist
                </li>
              </ul>
            </b-card>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col lg="12" class="ms-auto">
          <h2>Feedback for Service Enhancement</h2>
          <p class="lead mb-2">
            300+ Users rated us <span class="text-primary fw-bold">4.85</span> out of 5.
          </p>

          <Swiper
            class="mt-7"
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
            <SwiperSlide class="mb-5" v-for="item in testimonials" :key="item">
              <SwiperCard :testimonial="item" />
            </SwiperSlide>

            <div
              class="swiper-pagination swiper-pagination-primary position-relative text-start"
            ></div>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { testimonials } from '@/views/pages/about/OurServices/UiUx/data'
import SwiperCard from '@/views/pages/about/OurServices/UiUx/components/SwiperCard.vue'
import { approach } from '@/views/pages/about/OurServices/UiUx/data'
import { BIconPatchCheck } from 'bootstrap-icons-vue'
import { BIconPatchCheckFill } from 'bootstrap-icons-vue'
</script>
