<!-- <template>
  <TopNavigationBar9 />

  <main>
    <section class="pt-8">
      <b-container>
        <div class="bg-dark rounded-4 text-center position-relative overflow-hidden py-5">
          <div class="d-flex justify-content-center position-relative z-index-9">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dots breadcrumb-dark mb-1">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Portfolio List</li>
              </ol>
            </nav>
          </div>
          <h1 class="h2 text-white">Portfolio List</h1>

          <router-link class="btn btn-sm btn-primary mb-0" :to="{ name: 'contact.v1' }">
            Contact us now
          </router-link>
        </div>

        <div class="d-lg-flex align-items-center justify-content-center mt-6">
          <h6 class="mb-lg-0 me-3">Browse by:</h6>
          <div class="grid-menu" data-target=".filter-container">
            <ul class="nav nav-pills nav-pills-primary-soft gap-2">
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: selectedCategory === '*' }"
                  @click="filterCategory('*')"
                  >All work</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: selectedCategory === 'marketing' }"
                  @click="filterCategory('marketing')"
                  >Marketing</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: selectedCategory === 'design' }"
                  @click="filterCategory('design')"
                  >Web design</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: selectedCategory === 'business' }"
                  @click="filterCategory('business')"
                  >Development</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: selectedCategory === 'brand' }"
                  @click="filterCategory('brand')"
                  >Brand design</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: selectedCategory === 'ui' }"
                  @click="filterCategory('ui')"
                  >UI/UX design</a
                >
              </li>
            </ul>
          </div>
        </div>

        <b-row class="filter-container mt-3">
          <b-col
            v-for="(portfolio, idx) in filteredPortfolioData"
            :key="idx"
            sm="12"
            lg="12"
            :class="portfolio.categoryClass"
          >
            <div v-if="idx % 2 === 0">
              <CaseCard :item="portfolio" />
            </div>

            <div v-else>
              <CaseCard2 :item="portfolio" />
            </div>
          </b-col>
        </b-row>

        <div class="text-center mt-0">
          <b-button size="lg" variant="outline-light" class="mb-0"
            ><font-awesome-icon :icon="faSpinner" class="fa-lg me-2" />Load more work</b-button
          >
        </div>
      </b-container>
    </section>
  </main>

  <Footer8 />
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import TopNavigationBar9 from '@/views/portfolio/Portfolio/components/TopNavigationBar9.vue'
import { portfolioData } from '@/views/portfolio/Portfolio/data'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { initIsotope } from '@/helpers/init-isotope'
import Footer8 from '@/views/portfolio/Portfolio/components/Footer8.vue'
import CaseCard from '@/views/portfolio/Portfolio/components/CaseCard.vue'
import CaseCard2 from '@/views/portfolio/Portfolio/components/CaseCard2.vue'

const selectedCategory = ref('*')

const filterCategory = (category: string) => {
  selectedCategory.value = category
}

const filteredPortfolioData = computed(() => {
  if (selectedCategory.value === '*') {
    return portfolioData
  }
  return portfolioData.filter((portfolio) =>
    portfolio.categoryClass.includes(selectedCategory.value)
  )
})

onMounted(() => {
  initIsotope()
})
</script> -->

<template>
  <TopNavigationBar9 />

  <main>
    <section class="pt-8">
      <b-container>
        <div class="bg-dark rounded-4 text-center position-relative overflow-hidden py-5">
          <div class="d-flex justify-content-center position-relative z-index-9">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dots breadcrumb-dark mb-1">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Portfolio List</li>
              </ol>
            </nav>
          </div>
          <h1 class="h2 text-white">Portfolio List</h1>

          <router-link class="btn btn-sm btn-primary mb-0" :to="{ name: 'contact.v1' }">
            Contact us now
          </router-link>
        </div>

        <div class="d-lg-flex align-items-center justify-content-center mt-6">
          <h6 class="mb-lg-0 me-3">Browse by:</h6>
          <div class="grid-menu" data-target=".filter-container">
            <ul class="nav nav-pills nav-pills-primary-soft gap-2">
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: selectedCategory === '*' }"
                  @click="filterCategory('*')"
                  >All work</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: selectedCategory === 'marketing' }"
                  @click="filterCategory('marketing')"
                  >Marketing</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: selectedCategory === 'design' }"
                  @click="filterCategory('design')"
                  >Web design</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: selectedCategory === 'business' }"
                  @click="filterCategory('business')"
                  >Development</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: selectedCategory === 'brand' }"
                  @click="filterCategory('brand')"
                  >Brand design</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: selectedCategory === 'ui' }"
                  @click="filterCategory('ui')"
                  >UI/UX design</a
                >
              </li>
            </ul>
          </div>
        </div>

        <b-row class="filter-container mt-3">
          <b-col v-for="(portfolio, idx) in filteredProjects" :key="idx" sm="12" lg="12">
            <div v-if="idx % 2 === 0">
              <CaseCard :item="portfolio" />
            </div>

            <div v-else>
              <CaseCard2 :item="portfolio" />
            </div>
          </b-col>
        </b-row>

        <div class="text-center mt-0">
          <b-button size="lg" variant="outline-light" class="mb-0"
            ><font-awesome-icon :icon="faSpinner" class="fa-lg me-2" />Load more work</b-button
          >
        </div>
      </b-container>
    </section>
  </main>
  <Footer8 />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useProjects } from './Services/composables/projects'
import CaseCard from '@/views/portfolio/Portfolio/components/CaseCard.vue'
import CaseCard2 from '@/views/portfolio/Portfolio/components/CaseCard2.vue'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Footer8 from '@/views/portfolio/Portfolio/components/Footer8.vue'
import TopNavigationBar9 from '@/views/portfolio/Portfolio/components/TopNavigationBar9.vue'
const { loadProjects, filteredProjects, filterCategory, selectedCategory } = useProjects()

onMounted(() => {
  loadProjects()
})
</script>
