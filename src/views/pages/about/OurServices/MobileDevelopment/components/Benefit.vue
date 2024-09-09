<template>
  <section class="pb-0">
    <b-container>
      <b-row>
        <b-col lg="12" class="mb-6 mb-lg-0">
          <b-card no-body class="bg-dark overflow-hidden p-sm-4 h-100" data-bs-theme="dark">
            <b-card-header class="bg-transparent position-relative mb-3">
              <h3 class="mb-3">Who Could Benefit from This Service</h3>
              <p>Our Mobile Development service is perfect for:</p>

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
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { approach } from '@/views/pages/about/OurServices/MobileDevelopment/data'
import { BIconPatchCheck } from 'bootstrap-icons-vue'
</script>
