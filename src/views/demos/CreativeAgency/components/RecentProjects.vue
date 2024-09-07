<template>
  <section id="projects" style="background-color: #e7f8ee">
    <b-container>
      <div class="inner-container text-center mb-4 mb-sm-6">
        <h2 class="mb-4 text-black">Showcasing Recent Projects</h2>
        <p class="mb-0 text-gray">
          Discover a selection of our most recent client projects, showcasing our expertise,
          creativity, and commitment to delivering outstanding results.
        </p>
      </div>

      <b-row class="g-4 filter-container" data-isotope='{"layoutMode": "masonry"}'>
        <!-- <b-col md="4" lg="3">
          <div class="d-flex flex-column h-100">
            <h6 class="mb-sm-3">Browse by:</h6>
            <div class="grid-menu mb-4" data-target=".filter-container">
              <ul class="nav flex-md-column gap-1 nav-pills nav-pills-primary">
                <li class="nav-item">
                  <a class="nav-link active" data-filter="*">All work</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-filter=".marketing">Digital Marketing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-filter=".design">Web design</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-filter=".business">Business development</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-filter=".brand">Brand design</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-filter=".ui">UI/UX design</a>
                </li>
              </ul>
            </div>

            <div class="btn btn-light mt-auto mb-5" @click="goToPortfolioPage">
              View all projects
              <font-awesome-icon :icon="faArrowRightLong" class="ms-1" />
            </div>
          </div>
        </b-col> -->

        <b-col
         
          sm="6"
          lg="4"
          v-for="(project, idx) in projects"
          :key="idx"
          class="grid-item"
          :class="project.categoryClass"
        >
          <ProjectCard :project="project" />
        </b-col>
      </b-row>
      <b-row class="mt-6">
        <b-col class="d-flex flex-row justify-content-center align-items-center">
          <div class="btn btn-light" >
            View all projects
            <font-awesome-icon :icon="faArrowRightLong" class="ms-1" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
// import { initIsotope } from '@/helpers/init-isotope'
// import { onMounted } from 'vue'
import ProjectCard from '@/views/demos/CreativeAgency/components/ProjectCard.vue'
import { projects } from '@/views/demos/CreativeAgency/data'
// import router from '@/router'
// import { useRouter } from 'vue-router'
// const router = useRouter()

// function goToPortfolioPage() {
//   router.push({ name: 'portfolio.portfolio' }).then(() => {
//     window.scrollTo(0, 0)
//   })
// }
// function goToProjectsPage(ProjectId: number) {
//   router.push({ name: 'portfolio.case-study.v1',params: { id: ProjectId }  }).then(() => {
//     window.scrollTo(0, 0)
//   })
// }
// onMounted(() => {
//   initIsotope()
// })
</script>
