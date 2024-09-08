<!-- <template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-md-6">
        <h2 class="mb-0">How its work?</h2>
        <p>Our Web Design process is divided into four key stages:</p>
      </div>

      <b-row class="g-4 g-lg-7">
        <b-col sm="6" md="3" v-for="item in work" :key="item.id">
          <div
            class="d-flex justify-content-center align-items-center text-center flex-column bg-transparent"
          >
            <div
              class="icon-lg bg-primary bg-opacity-10 text-primary rounded-3 fw-bold flex-shrink-0 mb-3"
            >
              0{{ item.id }}
            </div>
            <h6>{{ item.title }}</h6>
            <p class="small mb-0">
              {{ item.description }}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { work } from '@/views/pages/about/ServiceSingle/data'
</script> -->

<!-- <template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-md-6">
        <h2 class="mb-0">How it Works</h2>
        <p>Our Web Design process is divided into four key stages:</p>
      </div>
      <b-row>
        <b-col lg="6"></b-col>
        <b-col lg="6">
          <div class="timeline-container">
            <div v-for="item in work" :key="item.id" class="timeline-item">
              <div
                class="timeline-icon bg-primary text-white rounded-circle fw-bold d-flex align-items-center justify-content-center"
              >
                0{{ item.id }}
              </div>
              <div class="timeline-content">
                <h6>{{ item.title }}</h6>
                <p>{{ item.description }}</p>
              </div>
              <div v-if="item.id < work.length" class="timeline-line"></div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { work } from '@/views/pages/about/ServiceSingle/data'
</script>

<style scoped>
/* Style for vertical timeline */
.timeline-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
}

.timeline-icon {
  width: 50px;
  height: 50px;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.timeline-content {
  margin-left: 20px;
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.timeline-line {
  position: absolute;
  top: 0;
  left: 25px;
  width: 10px;
  height: 100%;
  background-color: #000;
  z-index: -1;
}

.timeline-item:last-child .timeline-line {
  display: none;
}

h6 {
  font-weight: 600;
}

p {
  font-size: 0.875rem;
  color: #6c757d;
}
</style> -->

<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-md-6">
        <h2 class="mb-0">How it Works</h2>
        <p>
          Our UI/UX Design service is built on a unique five-step process that ensures we deliver
          designs that not only meet your goals but also exceed your users' expectations. Here’s how
          we work:
        </p>
      </div>
      <b-row>
        <b-col lg="6" class="d-flex flex-column justify-content-center align-items-center">
          <div class="d-none d-lg-block">
            <div class="box bg-primary">Planning</div>
            <div class="box bg-danger">Design</div>
            <div class="box bg-warning">Development</div>
          </div>
        </b-col>
        <b-col lg="6">
          <div class="timeline-container">
            <div class="timeline-line-full bg-primary"></div>

            <div v-for="item in work" :key="item.id" class="timeline-item">
              <div
                class="timeline-icon bg-primary text-white rounded-circle fw-bold d-flex align-items-center justify-content-center"
              >
                0{{ item.id }}
              </div>
              <div class="timeline-content">
                <h6>{{ item.title }}</h6>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { work } from '@/views/pages/about/OurServices/UiUx/data'
</script>

<style scoped>
.timeline-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding-left: 35px;
}

.timeline-item {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
}

.timeline-icon {
  width: 50px;
  height: 50px;
  font-size: 1.25rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.timeline-content {
  margin-left: 20px;
  background-color: transparent;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.timeline-line-full {
  position: absolute;
  top: 0;
  left: 60px;
  width: 4px;
  height: 100%;
  z-index: 0;
}
.box {
  width: 250px;
  height: 100px;
  border: 0.5px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: white;
  rotate: -10deg;
  transition: transform 0.3s ease-in-out;
}
.box:hover {
  transform: translateX(20px) rotate(0deg);
  cursor: pointer;
}
</style>
