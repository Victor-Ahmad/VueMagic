<template>
  <section class="pb-0" id="services">
    <b-container>
      <div class="inner-container text-center mb-4 mb-sm-6">
        <h2 class="mb-0">Our Services</h2>
      </div>
      <b-row
        v-if="loading"
        class="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 text-center d-flex justify-content-center"
      >
        <b-col>
          <p class="mb-2 p-2 rounded text-white bg-primary">Loading services ...</p>
        </b-col>
      </b-row>

      <b-row
        v-if="error"
        class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 text-center d-flex justify-content-center"
      >
        <b-col>
          <p class="mb-2 p-2 rounded text-white bg-primary">{{ error }}</p>
        </b-col>
      </b-row>

      <b-row v-if="services && services.length" class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <b-col v-for="(service, idx) in services" :key="idx">
          <b-card
            no-body
            class="card-hover-shadow border h-100 p-4 cursor-pointer"
            @click="goToServicePage"
          >
            <figure class="text-primary mb-4">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C16.567 21.75 20.4006 18.6099 21.4597 14.371C21.6257 13.7068 21.7086 13.3746 21.5327 13.0378C21.4825 12.9418 21.3914 12.8252 21.3104 12.7532C21.0263 12.5009 20.6322 12.5009 19.844 12.5009H13.3C12.5501 12.5009 12.1751 12.5009 11.9122 12.3099C11.8273 12.2482 11.7527 12.1736 11.691 12.0887C11.5 11.8258 11.5 11.4508 11.5 10.7009V4.15582C11.5 3.36765 11.5 2.97356 11.2477 2.68947C11.1758 2.60848 11.0591 2.51736 10.9631 2.4672C10.6263 2.29125 10.2942 2.37418 9.63002 2.54005C5.39056 3.59874 2.25 7.43262 2.25 12Z"
                  fill="currentColor"
                  fill-opacity="0.25"
                />
                <path
                  d="M12.8 9.4V4.25994C12.8 3.42978 12.8 3.0147 13.0698 2.72637C13.1465 2.64435 13.2702 2.55404 13.3717 2.50592C13.7284 2.33679 14.0733 2.44702 14.7632 2.6675C17.8775 3.66283 20.3372 6.12259 21.3326 9.23688C21.553 9.92672 21.6633 10.2716 21.4941 10.6284C21.446 10.7299 21.3557 10.8536 21.2737 10.9303C20.9853 11.2 20.5703 11.2 19.7401 11.2H14.6C13.8501 11.2 13.4751 11.2 13.2123 11.009C13.1274 10.9473 13.0527 10.8727 12.991 10.7878C12.8 10.5249 12.8 10.1499 12.8 9.4Z"
                  fill="currentColor"
                />
              </svg>
            </figure>
            <b-card-body class="p-0">
              <h5 class="mb-3">{{ service.name }}</h5>
              <p>{{ service.description }}</p>
            </b-card-body>

            <b-card-footer class="mt-auto p-0 pt-2">
              <router-link
                class="icon-link icon-link-hover stretched-link z-index-2"
                :to="{ name: 'services.single' }"
                >Learn More
                <BIconArrowRight class="bi" />
              </router-link>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>

      <b-row
        v-if="services && !services.length"
        class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 text-center d-flex justify-content-center"
      >
        <b-col>
          <p class="mb-2 p-2 rounded text-white bg-primary">No services available.</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { onMounted } from 'vue'
import { useServices } from '@/views/demos/CreativeAgency/Services/composables/service'
import { useRouter } from 'vue-router'

const router = useRouter()
const { services, loading, error, loadServices } = useServices()

onMounted(() => {
  loadServices()
})
function goToServicePage() {
  router.push({ name: 'services.single' }).then(() => {
    window.scrollTo(0, 0)
  })
}
</script>
