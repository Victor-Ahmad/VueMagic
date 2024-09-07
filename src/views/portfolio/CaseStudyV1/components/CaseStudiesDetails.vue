<template>
  <section class="pt-xl-9">
    <b-container class="pt-4 pt-xl-0">
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

      <b-row>
        <b-col md="9" class="mx-auto text-center" v-if="Project">

          
          <!-- <div class="d-flex justify-content-center position-relative mb-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dots pb-0 mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Portfolio Showcase</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Portfolio case studies v1
                </li>
              </ol>
            </nav>
          </div> -->
          <h1 class="mb-4">{{ Project.title }}</h1>
          <p>
            {{ Project.description }}
          </p>
        </b-col>

        <b-col cols="12" class="mt-6">
          <b-card
            no-body
            class="h-300px h-md-400px h-xl-600px overflow-hidden"
            :style="`background:url(${caseStudyImg1}) no-repeat; background-size:cover; background-position:center;`"
          ></b-card>
        </b-col>

        <b-col cols="12" class="mt-6">
          <b-row>
            <b-col cols="11" lg="5" xl="4" class="mx-auto mt-n8 mt-md-n9">
              <b-card no-body class="card-body bg-dark p-sm-5" data-bs-theme="dark">
                <ul class="list-group list-group-borderless">
                  <!-- <li class="list-group-item mb-3" v-for="(item, idx) in about" :key="idx">
                    <small>{{ item.title }}</small>
                    <p class="heading-color lead mt-1 mb-0">{{ item.description }}</p>
                  </li> -->
                  <li class="list-group-item mb-3">
                    <small>Client</small>
                    <p class="heading-color lead mt-1 mb-0">
                      {{ Project?.client?.first_name ?? '' }} {{ Project?.client?.last_name ?? '' }}
                    </p>
                  </li>
                  <li class="list-group-item mb-3">
                    <small>Email</small>
                    <p class="heading-color lead mt-1 mb-0">
                      {{ Project?.client?.email ?? '' }}
                    </p>
                  </li>
                  <li class="list-group-item mb-3">
                    <small>Phone</small>
                    <p class="heading-color lead mt-1 mb-0">
                      {{ Project?.client?.phone_number ?? '' }}
                    </p>
                  </li>
                  <li class="list-group-item mb-3">
                  <small>Duration</small>
                    <p class="heading-color lead mt-1 mb-0">
                      {{ Project?.time_in_days ??'' }}
                    </p>
                  </li>
                  <!-- <li class="list-group-item mb-3">
                  <small>time</small>
                    <p class="heading-color lead mt-1 mb-0">
                      {{ Project?.time ??'' }}
                    </p>
                  </li> -->

                  <li class="list-group-item d-grid mb-0">
                    <a href="Project.project_live_links.link" class="btn btn-lg btn-primary mb-0 flex-centered"
                      >View project website
                      <BIconBoxArrowUpRight class="ms-2" />
                    </a>
                  </li>
                </ul>
              </b-card>
            </b-col>

            <b-col lg="7" class="ms-auto ps-5 mt-6 mt-lg-0">
              <!-- <h4 class="mb-3">Overview</h4>
              <p class="lead">
                Ideas are the seeds of innovation. They can originate from personal experiences,
                observations, or the desire to solve a problem.
              </p>
              <p>
                Once an idea takes root, it requires nurturing and refinement. This stage involves
                research, brainstorming, and gathering feedback. Conducting market analysis,
                exploring existing solutions, and collaborating with others can help refine the idea
                further. The goal is to gain a deeper understanding of the idea's feasibility,
                potential impact, and market viability.
              </p>
              <ul class="list-inline mb-6 hstack gap-1">
                <li class="list-inline-item">
                  <a class="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="#"
                    >Branding</a
                  >
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="#"
                    >Packaging</a
                  >
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-outline-light rounded-pills btn-sm mb-lg-0" href="#"
                    >UI/UX design</a
                  >
                </li>
              </ul> -->

              <h4 class="mb-3">Achievements</h4>
              <ul>
                <li v-for="achievement in Project?.achievements" :key="achievement.achievement_name">
                  {{ achievement.achievement_name }}
                </li>
              </ul>

              <!-- <h4 class="mb-3">The Challenge</h4>
              <p>
                Turning ideas into reality is a transformative process that drives innovation and
                progress. It begins with recognizing the power and potential of an idea. Through
                cultivation, planning, and strategizing, ideas are refined and shaped into
                actionable plans. Challenges are embraced as opportunities for growth, and
                perseverance becomes key in overcoming obstacles.
              </p>
              <ul class="list-group list-group-borderless">
                <li class="list-group-item d-flex icons-center">
                  <BIconCheckCircle class="text-primary me-2" />Maintained Windows Servers
                </li>
                <li class="list-group-item d-flex icons-center">
                  <BIconCheckCircle class="text-primary me-2" />Supported Windows workstations
                </li>
                <li class="list-group-item d-flex icons-center">
                  <BIconCheckCircle class="text-primary me-2" />Setup a rotation schedule and set an
                  anti-virus system
                </li>
                <li class="list-group-item d-flex icons-center">
                  <BIconCheckCircle class="text-primary me-2" />Designed machines/servers and
                  trained employees
                </li>
              </ul> -->

              <h4 class="mb-3">Challenges</h4>
              <ul>
                <li v-for="challenge in Project?.challenges" :key="challenge.challenge_name">
                  <strong>{{ challenge.challenge_name }}</strong>: {{ challenge.challenge_description }}
                </li>
              </ul>

            </b-col>
          </b-row>
        </b-col>

        <!-- <b-col cols="12" class="mt-6">
          <b-row class="g-4 g-xl-6">
            <b-col sm="4" v-for="(image, idx) in lightBoxImages" :key="idx">
              <CustomGLightbox :link="image" data-glightbox data-gallery="image-popup">
                <img
                  :src="image"
                  class="rounded"
                  :class="idx == lightBoxImages.length - 2 ? 'mt-sm-6' : ''"
                  alt="blog-img"
                />
              </CustomGLightbox>
            </b-col>
          </b-row>
        </b-col> -->
        <b-col cols="12" class="mt-6">
          <b-row class="g-4 g-xl-6">
            <b-col sm="4" v-for="(image, idx) in Project?.project_images" :key="idx">
              <CustomGLightbox :link="image.image_path" data-glightbox data-gallery="image-popup">
                <img :src="image.image_path" class="rounded" alt="Project Image"
                :class="idx == lightBoxImages.length - 2 ? 'mt-sm-6' : ''"
                />
              </CustomGLightbox>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12">
          <b-row class="g-4 mt-7">
            <b-col lg="5">
              <h4 class="mb-3">Result</h4>
              <p class="lead mb-4">
                {{ Project?.result }}
              </p>
              <a
                href="Project.project_live_links.link"
                class="btn btn-link heading-color text-primary-hover p-0 mb-0 icons-center"
                >View project website
                <BIconBoxArrowUpRight class="ms-2" />
              </a>
            </b-col>

            <b-col lg="7" xl="6" class="ms-auto">
              <p v-for="technology in Project?.project_technologies" :key="technology.tools">
              {{ technology.tools }}
              </p>
              <Swiper
            class="mt-2 mt-md-4"
            :modules="[Autoplay]"
            :loop="true"
            :slidesPerView="2"
            :spaceBetween="30"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false
            }"
            :breakpoints="{
              576: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 }
            }"
            wrapperClass="align-items-center"
          >
            <SwiperSlide v-for="(image, idx) in clientImages" :key="idx">
              <img :src="image" class="px-3" :class="!idx && 'ps-0'" alt="client-img" />
            </SwiperSlide>
          </Swiper>
              

              <b-row class="row-cols-2 row-cols-md-3 mt-lg-6 g-4 g-lg-5">
                <b-col>
                  <h2 class="mb-0">22<span class="text-primary mb-0">%</span></h2>
                  <p class="mb-0">Increase in time spent on website</p>
                </b-col>

                <b-col>
                  <h2 class="mb-0">4.5<span class="text-primary mb-0">M</span></h2>
                  <p class="mb-0">View this project got across our social media network</p>
                </b-col>

                <b-col>
                  <h2 class="mb-0">{{ currency }}12.8<span class="text-primary mb-0">M</span></h2>
                  <p class="mb-0">Total raised in funding so far</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" class="mt-6">
          <b-card no-body class="card-body bg-light p-sm-5">
            <h5 class="display-4 opacity-3 text-primary lh-0 mb-0">
              <BIconQuote />
            </h5>
            <q class="fs-5 heading-color"
              >Too months nay end change relied who beauty wishes matter. Shew of john real park so
              rest we on. Ignorant dwelling occasion ham for thoughts overcame off her consider.
              Polite it elinor is depend.</q
            >
            <div class="d-flex align-items-center mt-4">
              <div class="avatar">
                <img class="avatar-img rounded-circle" :src="avatar2" alt="avatar" />
              </div>
              <div class="ms-3">
                <h6 class="mb-0">Emma Watson</h6>
                <small>CEO, Co-founder</small>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-row
        v-if="!Project"
        class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 text-center d-flex justify-content-center"
      >
        <b-col>
          <p class="mb-2 p-2 rounded text-white bg-primary">No projects available.</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import CustomGLightbox from '@/components/CustomGLightbox.vue'
import { BIconBoxArrowUpRight, BIconCheckCircle, BIconQuote } from 'bootstrap-icons-vue'
import { about } from '@/views/portfolio/CaseStudyV1/data'
import { currency } from '@/helpers'


import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'



import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'


const clientImages = [client1, client2, client3, client4]

import avatar2 from '@/assets/images/avatar/02.jpg'
import masonryImg5 from '@/assets/images/portfolio/masonry/05.jpg'
import masonryImg6 from '@/assets/images/portfolio/masonry/06.jpg'
import masonryImg8 from '@/assets/images/portfolio/masonry/08.jpg'
import caseStudyImg1 from '@/assets/images/portfolio/case-study-01.jpg'

const lightBoxImages = [masonryImg8, masonryImg6, masonryImg5]

import { onMounted } from 'vue'
import { UseProjects } from '@/views/portfolio/CaseStudyV1/Services/composables/project'
// import type { SpawnOptions } from 'child_process'
import { useRoute } from 'vue-router'

const { Project, loading, error, loadProjects } = UseProjects()
const route = useRoute()
const ProjectId = route.params.id
onMounted(() => {
  loadProjects(Number(ProjectId))
  console.log(Project)
})
</script>
