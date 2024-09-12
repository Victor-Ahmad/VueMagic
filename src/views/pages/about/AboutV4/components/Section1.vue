<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4 align-items-center">
        <b-col lg="6" class="order-lg-1">
          <b-row class="g-xl-5">
            <b-col md="6" v-for="(item, idx) in feature" :key="idx">
              <b-card no-body class="bg-light p-4" :class="idx == feature.length - 1 ? 'mt-5' : ''">
                <figure class="text-primary mb-3 flex-shrink-0">
                  <span v-html="item.icon" />
                </figure>
                <h6>{{ item.title }}</h6>
                <p class="mb-0">{{ item.description }}</p>
              </b-card>

              <b-card no-body class="bg-light p-4 mt-5">
                <figure class="text-primary mb-3 flex-shrink-0">
                  <span v-html="item.icon1" />
                </figure>
                <h6>{{ item.title1 }}</h6>
                <p class="mb-0">{{ item.description1 }}</p>
              </b-card>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="6" class="ps-xl-7 order-lg-2 ">
          <h1 class="mb-4">For who?</h1>
          <h5>Our services are designed for businesses and organizations that are:</h5>
          <ul>
            <li class="">
              <p class="pt-2">Optimizing Operations:  </p>
              <h6 class="ms-sm-4 pt-0">Organizations aiming to improve efficiency and streamline their processes.
              </h6>
            </li>
            <li>
              <p class="pt-2">Seeking Growth: </p>
              <h6 class="ms-sm-4 pt-0">Companies looking to expand their market presence and drive new revenue streams.</h6>
            </li>
            <li>
              <p class="pt-2">Enhancing User Experience: </p>
              <h6 class="ms-sm-4 pt-0">Businesses needing engaging and intuitive designs for their digital products.
              </h6>
            </li>
            <li>
              <p class="pt-2">Leveraging Technology:  </p>
              <h6 class="ms-sm-4 pt-0">Enterprises requiring advanced software solutions and technical expertise.
              </h6>
            </li>
            <li> 
              <p class="pt-2">Improving Market Reach:  </p>
              <h6 class="ms-sm-4 pt-0">Firms looking to elevate their brand and reach a broader audience.
              </h6>
            </li>
          </ul>

          <!-- <router-link class="btn btn-dark me-3 mb-0" :to="{ name: 'services.v1' }"
            >Explore services!</router-link
          >
          <router-link :to="{ name: 'contact.v2' }" class="icon-link icon-link-hover ms-1"
            >Request a quote
            <BIconArrowRight />
          </router-link> -->
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { feature } from '@/views/pages/about/AboutV2/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'
</script>


<style>
@media (max-width: 375px) {
  .order-lg-1 {
    order: 2 !important;
  }

  .order-lg-2 {
    order: 1 !important;
  }
}
</style>
