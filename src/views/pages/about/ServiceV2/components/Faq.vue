<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col lg="7" class="mx-auto">
          <h2 class="text-center mb-5">You have questions we have answers</h2>

          <b-accordion class="accordion-icon accordion-bg-light" id="accordionFaq">
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              v-for="(item, idx) in accordion"
              :key="idx"
              headerTag="p"
              :visible="!idx"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>
                {{ item.question }}
              </template>
              {{ item.answer }}
            </b-accordion-item>
          </b-accordion>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { accordion } from '@/views/pages/about/ServiceV2/data'
</script>
