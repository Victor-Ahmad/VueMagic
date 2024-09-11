<template>
  <section>
    <b-container>
      <div class="bg-dark rounded position-relative overflow-hidden p-4 p-sm-7">
        <div class="position-absolute top-0 start-0 mt-n8 mt-xl-n5 d-none d-md-block">
          <img :src="saasDecoration05" class="rotate-33 h-200px" alt="" />
        </div>

        <div class="position-absolute end-0 bottom-0 d-none d-lg-block">
          <img :src="ctaVectorImg" class="h-200px h-xl-300px" alt="" />
        </div>

        <b-row class="g-4 position-relative">
          <b-col lg="10" xl="7" class="mx-auto text-center">
            <h3 class="text-white mb-3">Get Started Today</h3>
            <p class="text-white opacity-8">
              Whether you have an app idea or need to optimize an existing one, our team is here to
              help. Share your vision with us, and let’s turn it into a reality.
            </p>

            <a @click="goToServicePage" class="btn btn-primary mb-6">Get started today</a>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import ctaVectorImg from '@/assets/images/elements/cta-vector.svg'
import saasDecoration05 from '@/assets/images/elements/saas-decoration/05.png'
import { useRouter } from 'vue-router'
const router = useRouter()
function goToServicePage() {
  router.push({ name: 'contact.v1' }).then(() => {
    window.scrollTo(0, 0)
  })
}
</script>
