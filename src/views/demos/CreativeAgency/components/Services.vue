<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container text-center mb-4 mb-sm-6">
        <h2 class="mb-0">Our Services</h2>
      </div>


      <b-row  class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <b-col >

          <b-card
            no-body
            class="card-hover-shadow border h-100 p-4 cursor-pointer"
           
            >
    
          
            <figure class="text-primary mb-4">
              <span v-html="service.icon" />
            </figure>
            <b-card-body class="p-0">

              <h5 class="mb-3">{{ }}</h5>
              <p>{{  }}</p>

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



    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from 'bootstrap-icons-vue'

</script>
