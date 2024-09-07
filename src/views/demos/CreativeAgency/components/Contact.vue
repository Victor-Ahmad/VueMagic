<template>
  <section class="pb-0">
    <b-container class="pt-5">
      <!-- <b-row
        v-if="loading"
        class="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 text-center d-flex justify-content-center"
      >
        <b-col>
          <p class="mb-2 p-2 rounded text-white bg-primary">Loading ...</p>
        </b-col>
      </b-row>

      <b-row
        v-if="error"
        class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 text-center d-flex justify-content-center"
      >
        <b-col>
          <p class="mb-2 p-2 rounded text-white bg-primary">{{ error }}</p>
        </b-col>
      </b-row> -->
      <b-row>
        <b-col lg="6" class="mb-6 mb-lg-0 d-none d-lg-block">
          <b-card no-body class="bg-dark overflow-hidden p-sm-2 h-100" data-bs-theme="dark">
            <b-card-header class="bg-transparent position-relative mb-3">
              <h3 class="mb-3">
               
              </h3>

              <p></p>
              <b-list-group class="list-group-borderless border-0 card-body bg-light border p-md-5">
                <b-list-group-item
                class="heading-color d-flex mb-0"
                >
                <!-- v-for="list in home?.contact_page?.whats_next?.whats_next_steps ?? []"
                :key="list" -->
                  <span class="flex-centered">
                    <BIconPatchCheck class="text-primary me-2" />
                  </span>
                  <!-- // {{ list.step_no }} {{ list.step }} -->
                </b-list-group-item>
              </b-list-group>
            </b-card-header>
          </b-card>
        </b-col>

        <b-col lg="5" class="ms-auto">
          <b-card no-body class="card-body shadow border p-sm-5">
            <figure
              class="position-absolute top-100 start-0 translate-middle mt-n5 d-lg-block d-none"
            >
              <svg
                width="225.3px"
                height="168.1px"
                viewBox="0 0 225.3 168.1"
                style="enable-background: new 0 0 225.3 168.1"
                xml:space="preserve"
              >
                <path
                  class="fill-primary opacity-5"
                  d="M147,129.9c1.9-1,9.2-2.2,4.2,2.3c-1,0.9-3.4,0.9-4.7,1.2c-3,0.8-5.8,2-8.6,3.3c0.9,0.3,1.8,0.7,2.7,1 c-1.2-3.3-3.5-6.4-3.7-9.9c-0.1-1.3,0-5,1.2-5.8c3.2-2.1,5.9,3.8,4.8,4.6c0.9-0.3,1.9-0.5,2.8-0.8c-2.4-0.9-4.6-3.7-5-6.1 c-1.2,0.9-2.4,1.8-3.7,2.8c1,0.4,1.7,1,2.1,1.9c0.2,0.8,0.4,1.7,0.5,2.5c0.8-0.1,1.5-0.2,2.3-0.4c-1.3-0.4-2.5-1.7-3.3-2.7 c-1.3-1.5-4.3-0.3-4.4,1.7c-0.4,4.4,3.1,8.4,5.1,12c1.1,1.9,5-0.2,4.4-2.2c-0.6-2.2-1.8-4.7-1.9-7c-0.5,0.8-0.9,1.6-1.4,2.4 c-0.8,0.5,3,1.7,3.3,1.7c1.2,0.2,1.9,0.2,2.9-0.3c0.7-0.3,2.9-1.8,2.4-1.9c-0.8-0.3-5.4,1.1-6.6,1.1c-2.3,0-4.7,4-1.7,4 c3.5,0,7.5-0.4,10.6-2.2c2.1-1.2,4.4-4.4,2.5-6.7c-2-2.4-4.9,0-6.8,1c-2.1,1.1-3.1,0.1-5.4-0.3c-1.3-0.2-2-0.1-3.1,0.6 c-0.9,0.5-1.4,1.4-1.4,2.4c0.1,2.3,1.3,4.8,1.9,7c1.5-0.7,3-1.4,4.4-2.2c-1.5-2.6-5.1-6.9-4.8-10c-1.5,0.6-3,1.1-4.4,1.7 c2.2,2.6,6.1,6.1,8.8,2.1c2.5-3.6,0.2-8.3-3.4-9.9c-1.6-0.7-3.9,1.1-3.7,2.8c0.5,3.4,5.1,10.1,9.2,7.9c3.9-2.1,1.8-8.6-0.6-11 c-3.5-3.6-8.5-1.7-10.5,2.4c-1.3,2.6-2.2,5.7-2,8.6c0.2,3.7,2.5,6.7,3.8,10.2c0.4,1.1,1.6,1.5,2.7,1c4-1.9,8-2.9,12.1-4.2 c2.5-0.8,6-2.3,6.9-5.1c0.7-2.4-1.2-6.1-3.5-7c-3-1.1-6.5,1.3-9,2.6C142.3,128.2,144.3,131.3,147,129.9L147,129.9z"
                />
                <path
                  class="fill-mode"
                  d="M3,0.9C3,1,3,1.2,3.1,1.4c0.1,0.1,0.2,0.2,0.4,0.3c2.8,4.7,5.4,9.5,7.9,14.4c9.2,18,16.3,36.9,21.4,56.4 c0.1,0.3,0.4,0.4,0.7,0.3c0,0.3,0.4,0.6,0.7,0.4c2.7-1.8,5.1-4.2,7.7-6.2c2.5-1.9,5-3.7,7.6-5.5c0.8-0.5,1.6-1.1,2.3-1.6 c0,0.1,0,0.2,0.1,0.3c1.5,2.3,4,4.3,6.1,6.1c1.1,0.9,2.2,1.9,3.3,2.7c1,0.8,2,1.7,3.2,2.2c0.3,0.1,0.5-0.2,0.4-0.5c0,0,0,0,0,0 c2.4-8.3,4.5-16.8,6-25.4c0.2,0,0.3-0.2,0.3-0.4c7.6-3.5,14.4-9,20.4-14.8c0.2-0.2,0.2-0.4,0.1-0.6c0.1-0.2,0.1-0.6-0.2-0.7 c-6.4-2.4-13-4.3-19.5-6.5C49.3,15,26.6,7.5,3.8,0.2c0,0,0,0-0.1,0c0,0-0.1,0-0.1-0.1C3.2-0.3,2.7,0.5,3,0.9z M70.6,44.2 c-4.6-3.4-9.5-6.4-14.3-9.5C39.8,23.8,23.2,12.9,6.7,2.1c5.3,1.8,10.7,3.6,16,5.3l34,11.1c5.8,1.9,11.5,3.8,17.3,5.7 c5.6,1.8,11.1,3.9,16.8,5.4c-3,2.9-6.3,5.7-9.7,8.2c-3.3,2.4-6.7,4.4-10.2,6.5C70.8,44.2,70.7,44.2,70.6,44.2z M64.8,67.5 c-0.3-5.7-0.5-11.4-1-17.1c0-0.4-0.4-0.6-0.7-0.5c-0.1-0.2-0.4-0.4-0.6-0.4c-0.1,0-0.2-0.1-0.3-0.1c-0.7-0.8-1.6-1.5-2.4-2.2 c-1.1-1-2.3-1.9-3.4-2.9c-2.1-1.8-4.3-3.5-6.4-5.3c-7.8-6.5-15.5-12.9-23.3-19.4c-3.9-3.2-7.8-6.5-11.6-9.7C13.1,8.3,11.2,6.7,9.3,5 l8.8,5.8c8.8,5.8,17.5,11.5,26.3,17.3c4.4,2.9,8.8,5.8,13.2,8.7c4.2,2.8,8.4,5.7,12.8,8.3C68.6,52.6,66.9,60,64.8,67.5z M52.3,59.6 c1.6-1.1,3.2-2.3,4.7-3.5c1.2-1,2.4-1.9,3.5-2.9c0.7-0.6,1.8-1.3,2.2-2.2c0,6.2,0.6,12.5,1.1,18.6c-0.7-0.6-1.6-1.1-2.3-1.7 c-1-0.8-2.1-1.7-3.1-2.6c-1-0.9-2-1.8-2.9-2.7c-1-1-1.9-2.1-3-3C52.5,59.7,52.4,59.6,52.3,59.6z M6.1,4c3.3,2.9,6.9,5.6,10.3,8.4 c7.7,6.4,15.4,12.8,23.1,19.2c3.8,3.2,7.6,6.3,11.4,9.5c2,1.6,4,3.3,5.9,4.9c1.7,1.4,3.4,3.3,5.5,4.2c0,0,0,0,0,0 c0.1,0.1,0.1,0.1,0.2,0.1c-1.1,0.3-2,1.6-2.9,2.3c-1.1,0.9-2.2,1.9-3.4,2.8c-2.6,2-5.3,3.9-8,5.7c-2.6,1.8-5.1,3.6-7.6,5.6 c-2.3,1.8-4.9,3.5-6.9,5.7c0,0,0,0,0-0.1c-1.4-5.6-3-11.1-4.7-16.5C23.2,37.8,15.5,20.4,6.1,4z"
                />
                <path
                  class="fill-mode"
                  d="M67.3,70.8c2.2,6.3,5.5,12.1,9.9,17.3c2.2,2.6,4.7,5,7.4,7.2c1.8,1.5,3.8,2.9,6.1,3.7c0.3,1.1,0.9,2.2,1.4,3.2 c1.5,2.8,3.4,5.5,5.2,8.1c3.7,5.2,7.8,10,12.6,14.2c7.2,6.2,16.3,10.9,25.8,12.2c0.4,0.9,0.8,1.8,1.2,2.6 c5.7,10.5,18.1,16.3,29.6,11.9c5.3-2,10-6.1,12.2-11.4c0.3-0.7,0.5-1.4,0.7-2.2c0.8,0.3,1.5,0.5,2.3,0.7c6.6,2,13.7,1.9,20.3-0.2 c12.2-3.8,21.5-14.8,23.3-27.4c0.1-0.5-0.6-0.7-0.7-0.2c-2.1,11.7-10,22-21.2,26.2c-5.4,2-11.2,2.6-16.9,1.7 c-2.3-0.3-4.6-0.9-6.8-1.8c0.4-2.1,0.3-4.4-0.5-6.4c-0.8-2-2.8-3.7-4.8-2.1c-1.9,1.5-1.9,4.1-0.5,5.9c1.2,1.5,2.9,2.5,4.8,3.2 c-0.5,2-1.4,3.9-2.6,5.5c-2.8,4.1-7.2,6.9-11.9,8.2c-10,2.7-20.1-2.1-25.5-10.7c-0.7-1.1-1.3-2.3-1.9-3.5c2.6,0.3,5.2,0.3,7.9,0.1 c4.3-0.4,9.8-2.5,9.6-7.7c-0.1-1.8-0.9-3.6-2.5-4.4c-2-0.9-4-0.1-5.8,1c0.4-1.5,0-3.3-1.1-4.5c-1.8-2.1-5-2-7.2-0.5 c-4.9,3.2-4.2,9.8-2.3,15c-0.2,0-0.3,0-0.5-0.1c-10.4-1.7-19.8-7.3-27.3-14.6c-3.7-3.6-6.9-7.5-9.9-11.7c-1.5-2.1-2.9-4.2-4.2-6.4 c-0.7-1.2-1.5-2.6-2-4c0.5,0.1,1,0.2,1.5,0.2c2.2,0.1,4.2-0.7,5.5-2.6c1-1.4,1.4-3.4,0.5-5c-2.2-3.9-7.6-0.9-8.5,2.4 c-0.3,1.2-0.3,2.4,0,3.6c-2.1-0.8-4.2-2.3-5.7-3.4c-7.7-6.2-13.6-14.4-17-23.7C67.6,70.5,67.2,70.5,67.3,70.8z M178.7,136.3 C178.7,136.3,178.7,136.2,178.7,136.3c-2.6-1.1-6.6-3.5-4.6-6.7c1.3-2.1,3.3-0.9,4.1,0.9c0.6,1.4,0.7,2.9,0.6,4.4 C178.9,135.4,178.8,135.8,178.7,136.3z M136.3,135.8c-1.6-3.9-2.4-8.3-0.5-11.9c1.2-2.4,4.5-4.5,7.1-3.1c2.1,1.1,3.1,4.3,1.3,6 c-0.3,0.3,0.1,1,0.5,0.7c2.2-1.7,6.2-4.1,8.1-0.7c1.2,2.2,0.5,5-1.3,6.6c-2.1,1.9-5.1,2.4-7.9,2.6 C141.2,136.2,138.7,136.1,136.3,135.8z M91.2,98.1c-0.3-1.1-0.4-2.2-0.1-3.4c0.4-2.1,2.5-4.1,4.7-4.1c2.7,0,3.5,2.8,2.4,4.9 C96.6,98.7,93.9,98.9,91.2,98.1z"
                />
              </svg>
            </figure>
            <h1 class="mb-5 h3">Let's level up your brand, together</h1>

            <b-form  class="row g-4">
              <b-col md="6">
                <b-form-group
                  label="First name *"
                  label-for="first_name"
                  label-class="heading-color"
                >
                  <b-form-input
                    v-model="firstName"
                    type="text"
                    class="form-control-lg"
                    placeholder="First name"
                    required
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Last name *" label-for="last_name" label-class="heading-color">
                  <b-form-input
                    v-model="lastName"
                    type="text"
                    class="form-control-lg"
                    placeholder="Last name"
                    required
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="Email address *" label-for="email" label-class="heading-color">
                  <b-form-input
                    v-model="email"
                    type="email"
                    class="form-control-lg"
                    placeholder="name@example.com"
                    required
                  />
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="Phone number *"
                  label-for="mobile_number"
                  label-class="heading-color"
                >
                  <b-form-input
                    v-model="mobileNumber"
                    type="text"
                    class="form-control-lg"
                    placeholder="(xxx) xx xxxx"
                    required
                  />
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group label="Services *" label-for="service_id" label-class="heading-color">
                  <b-form-select
                    v-model="serviceId"
                    class="form-control-lg bg-primary-bg-subtle border-bottom cursor-pointer p-2"
                    id="floatingServices"
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <!-- <option v-for="service in services" :key="service.id" :value="service.id">
                      {{ service.name }}
                    </option> -->
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-form-group
                  label="Message *"
                  label-for="msg"
                  label-class="form-label heading-color"
                >
                  <b-form-textarea
                    v-model="msg"
                    placeholder="Write your message here...."
                    style="height: 150px"
                    required
                  />
                </b-form-group>
              </b-col>

              <b-col cols="12">
                <b-button
                  type="submit"
                  class="mb-0"
                  variant="primary"
                  size="lg"
                  
                >
                  Send a message
                </b-button>
              </b-col>
            </b-form>
            <!-- <div v-if="response && response.success === 1" class="mt-3">
              <p class="text-success">{{ response.message }}</p>
            </div>

            <div v-if="(response && response.success === 0) || error" class="mt-3 text-danger">
              <p v-for="(msgs, key) in error" :key="key">
                <strong>{{ key }}:</strong>
                <span v-for="msg in msgs" :key="msg">{{ msg }}<br /></span>
              </p>
            </div> -->
          </b-card>
        </b-col>
        <b-col
          lg="6"
          class="ms-auto mb-lg-0 d-lg-none d-sm-block d-flex align-items-center justify-content-center"
        >
          <div class="my-4">
            <svg
              height="60"
              width="60"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
              fill="#05dac3"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    class="st0"
                    d="M470.968,180.987c-18.105-25.756-49.441-38.015-80.18-31.464V85.769C390.788,38.475,352.312,0,305.018,0 H206.98c-47.285,0-85.761,38.475-85.761,85.769v63.754c-30.688-6.585-62.058,5.666-80.214,31.498 c-9.295,13.206-14.228,28.771-14.228,44.959c0,15.071,4.319,29.726,12.49,42.395l0.869,1.337l0.928,1.295l150.01,207.799 C206.146,499.62,230.402,512,256.004,512c25.594,0,49.849-12.38,64.87-33.125l150.06-207.868l0.929-1.295l0.869-1.337 c8.17-12.67,12.49-27.324,12.49-42.395C485.222,209.784,480.298,194.227,470.968,180.987z M421.416,235.258L271.408,443.057 c-3.579,4.942-9.304,7.873-15.404,7.873s-11.834-2.93-15.412-7.873L90.582,235.258c-1.824-2.828-2.734-6.057-2.734-9.278 c0-3.45,1.048-6.892,3.118-9.84c4.012-5.708,11.084-8.401,17.866-6.808l73.458,17.159V85.769c0-13.64,11.05-24.698,24.69-24.698 h98.038c13.64,0,24.699,11.058,24.699,24.698v140.722l73.442-17.159c6.799-1.584,13.861,1.099,17.874,6.808 c2.079,2.948,3.118,6.39,3.118,9.84C424.152,229.201,423.24,232.43,421.416,235.258z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </b-col>
        <b-col lg="6" class="mb-6 mb-lg-0 d-lg-none d-sm-block">
          <b-card no-body class="bg-dark overflow-hidden p-sm-2 h-100" data-bs-theme="dark">
            <b-card-header class="bg-transparent position-relative mb-3">
              <h3 class="mb-3">
                {{ }}
              </h3>

              <p>{{  }}</p>
              <b-list-group class="list-group-borderless border-0 card-body bg-light border p-md-5">
                <b-list-group-item
                class="heading-color d-flex mb-0"
                >
                <!-- v-for="list in home?.contact_page?.whats_next?.whats_next_steps ?? []"
                :key="list" -->
                  <span class="flex-centered">
                    <BIconPatchCheck class="text-primary me-2" />
                  </span>
                  <!-- {{ list.step_no }} {{ list.step }} -->
                </b-list-group-item>
              </b-list-group>
            </b-card-header>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { lists } from '@/views/demos/CreativeAgency/data'
import { BIconPatchCheck } from 'bootstrap-icons-vue'
import { useServices } from '@/views/demos/CreativeAgency/Services/composables/service'
import { useContactForm } from '@/views/demos/CreativeAgency/Services/composables/contact'
import type { ContactUsBody } from '@/views/demos/CreativeAgency/Services/types/ContactUsBodyType'

const firstName = ref<string>('')
const lastName = ref<string>('')
const email = ref<string>('')
const mobileNumber = ref<string>('')
const msg = ref<string>('')
const serviceId = ref<number | null>(null)

// const { services, loadServices } = useServices()
// onMounted(() => {
//   loadServices()
// })

// const { submitForm, response, loading, error } = useContactForm()
// import { useHome } from '@/views/demos/CreativeAgency/Services/composables/home'

// const handleSubmit = () => {
//   const formData: ContactUsBody = {
//     first_name: firstName.value,
//     last_name: lastName.value,
//     email: email.value,
//     mobile_number: mobileNumber.value,
//     msg: msg.value,
//     service_id: serviceId.value ?? 0
//   }

//   submitForm(formData)
// }

// const { home, loadHome } = useHome()

// onMounted(() => {
//   loadHome()
// })
</script>
