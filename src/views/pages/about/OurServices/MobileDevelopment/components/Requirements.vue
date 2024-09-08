<template>
  <section class="pb-0">
    <b-container data-sticky-container>
      <b-row>
        <b-col lg="4" class="mb-5">
          <CustomStickyElement data-sticky data-margin-top="80" data-sticky-for="576">
            <h2 class="mb-4">Mobile Development Requirements</h2>
            <p class="mb-4">
              To get started with our Mobile Development service, we will need the following:
            </p>
          </CustomStickyElement>
        </b-col>

        <b-col lg="8" class="ps-xl-7">
          <b-row class="g-4 g-sm-5">
            <b-col md="6" v-for="requirement in cards" :key="requirement">
              <b-card no-body class="border bg-light p-5" style="height: 250px">
                <b-card-body class="p-0">
                  <h5 class="mb-2">
                    <router-link :to="{ name: 'services.single' }" class="stretched-link">{{
                      requirement.title
                    }}</router-link>
                  </h5>
                  <p class="mb-0">{{ requirement.description }}</p>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import CustomStickyElement from '@/components/CustomStickyElement.vue'
import { cards } from '@/views/pages/about/OurServices/MobileDevelopment/data'
</script>
