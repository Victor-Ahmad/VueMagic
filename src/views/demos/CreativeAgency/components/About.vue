<template>
  <section class="pb-0" style="background-color: #e7f8ee">
    <b-container>
      <b-row class="mb-3 mb-xl-0">
        <b-col xl="12">
          <h4 class="lh-base mb-0 text-black">
            InnovaCraft :" Where 
            <span style="color: #05dac3">Innovation</span>
             Meets Expertise "
          </h4>
        </b-col>
      </b-row>
      <b-row class="align-items-center">
        <b-col lg="6" class="pe-lg-5 mt-3">
          <p class="mb-5">
            At InnovaCraft , we combine creative innovation with technical 
            expertise to deliver tailored solutions that drive business growth , 
            transform ideas into reality , and empower brands to succeed in the
             digital world . 
          </p>

          <b-card no-body class="card-body bg-light p-sm-5 h-100">
            <img :src="about3" class="position-absolute bottom-0 end-0 mb-0 me-3 d-none d-sm-block w-25" 
            />
            

            <b-tabs nav-class="nav-pills nav-pills-dark border-0" content-class="mt-4">
              <b-tab title="Our Mission" class="fade">
                <!-- <h5 class="mb-3">Modern & creative agency specialized in Business</h5> -->
                <p class="mb-2">
                  Empowering businesses with innovative digital solutions that drive growth and success .
                </p>

                <ul class="list-group list-group-borderless mb-3">
                  <li class="list-group-item heading-color d-flex pb-0 icons-center">
                    <BIconPatchCheckFill class="me-2" />
                    Deliver creative , technology - driven strategies tailored to our clients ' unique needs .
                  </li>
                  <li class="list-group-item heading-color d-flex pb-0 icons-center">
                    <BIconPatchCheckFill class="me-2" />
                    Transform ideas into impactful solutions that enhance user engagement and performance .
                  </li>
                  <li class="list-group-item heading-color d-flex pb-0 icons-center">
                    <BIconPatchCheckFill class="me-2" />
                    Foster long - term partnerships through trust , collaboration , and excellence .
                  </li>
                </ul>

                <router-link class="icon-link icon-link-hover" :to="{ name: 'about.v4' }"
                  >Know about more
                  <BIconArrowRight class="bi" />
                </router-link>
              </b-tab>

              <b-tab title="Our Goal" class="fade">
                <!-- <h5 class="mb-3">
                  We believe that it takes great people to deliver a great product
                </h5> -->
                <p class="mb-2">
                  Our goals focus on driving innovation , delivering value , and building lasting partnerships .
                </p>

                <ul class="list-group list-group-borderless mb-3">
                  <li class="list-group-item heading-color d-flex pb-0 icons-center">
                    <BIconPatchCheckFill class="me-2" />
                    Innovate Continuously : Stay ahead of industry trends with cutting - edge solutions .
                  </li>
                  <li class="list-group-item heading-color d-flex pb-0 icons-center">
                    <BIconPatchCheckFill class="me-2" />
                    Client - Centered Solutions : Tailor strategies to meet the unique goals of each client .
                  </li>
                  <li class="list-group-item heading-color d-flex pb-0 icons-center">
                    <BIconPatchCheckFill class="me-2" />
                    Deliver Excellence : Consistently provide high - quality , scalable solutions .
                  </li>
                  <li class="list-group-item heading-color d-flex pb-0 icons-center">
                    <BIconPatchCheckFill class="me-2" />
                    Foster Long - Term Partnerships : Build trust and collaborative relationships with clients .
                  </li>
                  <li class="list-group-item heading-color d-flex pb-0 icons-center">
                    <BIconPatchCheckFill class="me-2" />
                    Empower Businesses Globally : Help businesses unlock their potential on a global scale .
                  </li>
                </ul>

                <router-link class="icon-link icon-link-hover" :to="{ name: 'about.v4' }"
                  >Know about more
                  <BIconArrowRight class="bi" />
                </router-link>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>

        <b-col lg="6"  class="mb-3 h-100">
          <div class="position-relative d-flex justify-content-center h-100">
            <img :src="about4" class="rounded h-100" alt="" />
            
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconArrowRight, BIconPatchCheckFill } from 'bootstrap-icons-vue'

import about4 from '@/assets/images/home/leading image.png'
import about3 from '@/assets/images/home/target-1.png'
// import starImage from '@/assets/images/elements/trustpilot-star.svg'
</script>
