<template>
  <section
    class="bg-dark pt-lg-8 pt-xl-9"
    style="background-position: center left; background-size: cover"
    data-bs-theme="dark"
    :style="{ backgroundImage: `url('${bgpattern}')` }"
  >
    <b-container class="position-relative pt-2 pt-lg-0">
      <b-row class="align-items-center">
        <b-col md="7" xl="6">
          <h1 class="mb-4">Web Design</h1>
          <p class="mb-4">
            Our Web Design service is dedicated to crafting visually appealing, user-friendly, and
            responsive websites that align perfectly with your brand identity. We focus on creating
            sites that not only look stunning but also provide a seamless experience for your users
            across all devices. Whether you're starting from scratch or looking to refresh your
            existing site, our design team will work closely with you to bring your vision to life.
          </p>
        </b-col>

        <b-col md="4" class="ms-auto text-md-end">
          <router-link :to="{ name: 'contact.v1' }" class="btn btn-lg btn-primary mb-6 mb-md-0">
            Start your project
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import bgpattern from '@/assets/images/elements/bg-pattern-2.png'

// import { onMounted } from 'vue'
// import { useRoute } from 'vue-router'
// import { useServices } from '@/views/pages/about/ServiceSingle/Services/composables/service'

// const { services, loading, error, loadServices } = useServices()
// const route = useRoute()
// const serviceId = route.params.id

// onMounted(() => {
//   loadServices(Number(serviceId))
//   console.log(services)
// })
</script>
