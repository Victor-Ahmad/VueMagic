<template>
  <section class="pb-0">
    <b-container data-sticky-container>
      <b-row>
        <b-col lg="4" class="mb-5">
          <CustomStickyElement data-sticky data-margin-top="80" data-sticky-for="576">
            <h2 class="mb-4">Outsourcing Requirements</h2>
            <p class="mb-4">
              To ensure we provide a customized outsourcing solution, please provide:
            </p>
          </CustomStickyElement>
        </b-col>

        <b-col lg="8" class="ps-xl-7">
          <b-row class="g-4 g-sm-5">
            <b-col md="6" v-for="requirement in cards" :key="requirement">
              <b-card no-body class="border bg-light p-5 card" style="height: 250px">
                <b-card-body class="p-0">
                  <h5 class="mb-2">
                    {{ requirement.title }}
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
import { cards } from '@/views/pages/about/OurServices/Outsourcing/data'
</script>
<style scoped>
.card:hover {
  border: 1px solid #05dac3 !important;
  cursor: pointer;
}
.card:hover h5 {
  color: #05dac3 !important;
}
</style>
