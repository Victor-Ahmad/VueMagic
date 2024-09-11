<template>
  <section class="pb-9">
    <b-container class="pt-3">
      <b-row>

        <b-col lg="12">
          <b-card >
            <h1 class="text-white mt-8">CONTACT US</h1>

          </b-card>
          

          <b-card style="background-color: #fff; position: relative">
            <div style="position: absolute; top: -220px" >
              <b-col lg="6" class="ms-auto d-sm-none d-lg-block">
                <b-card no-body class="card-body shadow border p-sm-5 m-3">                 
                  <h1 class="mb-5 h3">Let's level up your brand, together</h1>


                  <b-form class="row g-4">
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
                      <b-form-group
                        label="Last name *"
                        label-for="last_name"
                        label-class="heading-color"
                      >
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
                      <b-form-group
                        label="Email address *"
                        label-for="email"
                        label-class="heading-color"
                      >
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
                      <b-form-group
                        label="Services *"
                        label-for="service_id"
                        label-class="heading-color"
                      >
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
                      <b-button type="submit" class="mb-0" variant="primary" size="lg">
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
                <!-- <div class="my-4">
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
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path
                          class="st0"
                          d="M470.968,180.987c-18.105-25.756-49.441-38.015-80.18-31.464V85.769C390.788,38.475,352.312,0,305.018,0 H206.98c-47.285,0-85.761,38.475-85.761,85.769v63.754c-30.688-6.585-62.058,5.666-80.214,31.498 c-9.295,13.206-14.228,28.771-14.228,44.959c0,15.071,4.319,29.726,12.49,42.395l0.869,1.337l0.928,1.295l150.01,207.799 C206.146,499.62,230.402,512,256.004,512c25.594,0,49.849-12.38,64.87-33.125l150.06-207.868l0.929-1.295l0.869-1.337 c8.17-12.67,12.49-27.324,12.49-42.395C485.222,209.784,480.298,194.227,470.968,180.987z M421.416,235.258L271.408,443.057 c-3.579,4.942-9.304,7.873-15.404,7.873s-11.834-2.93-15.412-7.873L90.582,235.258c-1.824-2.828-2.734-6.057-2.734-9.278 c0-3.45,1.048-6.892,3.118-9.84c4.012-5.708,11.084-8.401,17.866-6.808l73.458,17.159V85.769c0-13.64,11.05-24.698,24.69-24.698 h98.038c13.64,0,24.699,11.058,24.699,24.698v140.722l73.442-17.159c6.799-1.584,13.861,1.099,17.874,6.808 c2.079,2.948,3.118,6.39,3.118,9.84C424.152,229.201,423.24,232.43,421.416,235.258z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div> -->
              </b-col>
              <!-- <b-col lg="6" class="mb-6 mb-lg-0 d-lg-none d-sm-block">
          <b-card no-body class="bg-dark overflow-hidden p-sm-2 h-100" data-bs-theme="dark">
            <b-card-header class="bg-transparent position-relative mb-3">
              <h3 class="mb-3">
                {{}}
              </h3>

              <p>{{}}</p>
              <b-list-group class="list-group-borderless border-0 card-body bg-light border p-md-5">

                <b-list-group-item
                class="heading-color d-flex mb-0"
                >
              

                  <span class="flex-centered">
                    <BIconPatchCheck class="text-primary me-2" />
                  </span>
                
                </b-list-group-item>
              </b-list-group>
            </b-card-header>
          </b-card>
          </b-col> -->
            </div>
            <div class="col-6">
              <p class="text-black">
               
                Thank you for contacting
                <span style="color: #05dac3"> *InnovaCraft*!</span> 
                Our team will respond within 24-48 hours to schedule a free consultation.
                During the consultation,we’ll dive into your specific needs and goals.
                 Based on our discussion, we’ll create a customized proposal designed to meet your business objectives.
              </p>
              <h5 class="text-black">Call us at: + 316 114 109 68</h5>

              <div class="row">
                <h4 class="text-black mt-5">Why Partner with Us?</h4>
                <div class="col-md-6">
                  <ul class="list-unstyled benefits mt-3">
                    <li  class="pb-3">
                      <BIconPatchCheckFill class="me-2" style="width: 1.4rem" />
                      <span style="color: black">Cutting-Edge Tech:</span>
                        Solutions that evolve with your needs.
                    
                    </li>
                    <li  class="pb-3">
                      <BIconPatchCheckFill class="me-2" style="width: 1.4rem" />
                      <span style="color: black"> Full Support</span>
                       We’ll discuss your project needs and vision
                    
                    </li>
                    <li  class="pb-3">
                      <BIconPatchCheckFill class="" style="width: 1.4rem" />
                      <span style="color: black"> Proven Success:</span>
                        Trusted by businesses of all sizes.
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled benefits mt-3" >
                    <li  class="pb-3">
                      <BIconPatchCheckFill class="me-2" style="width: 1.4rem" />
                      <span style="color: black"> Clear Communication:</span>
                        Stay informed, always.
                    </li>
                    <li class="pb-3">
                      <BIconPatchCheckFill class="me-2" style="width: 1.4rem" />
                      <span style="color: black"> Scalable Services:</span>
                        From small to large projects, we’ve got you covered.
                    </li>
                    <li class="pb-3">
                      <BIconPatchCheckFill class="me-2" style="width: 1.4rem" />
                      <span style="color: black"> Flexible Terms:</span>
                        One-off or ongoing, we’re here for both.
                    </li>
                  </ul>
                </div>
              </div>
              <h4 class="text-black mt-3" >What happens next?</h4>
              

              <div class="col-12 mt-3 d-flex  flex-wrap justify-content-between">
                <div class="step d-flex align-items-center">
                  <h4 class="step-number">1</h4>
                  <p class="step-text mb-0"><span style="color: black">Initial Contact:</span> We’ll confirm receipt and share next steps within a few hours.</p>
                  <BIconChevronRight class="step-icon ml-auto" />
                </div>
                <div class="step col-12 col-md-3 d-flex align-items-center">
                  <h4 class="step-number">2</h4>
                  <p class="step-text mb-0"><span style="color: black">Consultation:</span> We’ll discuss your project needs and vision</p>
                  <BIconChevronRight class="step-icon ml-auto" />
                </div>
                <div class="step col-12 col-md-3 d-flex align-items-center">
                  <h4 class="step-number">3</h4>
                  <p class="step-text mb-0"><span style="color: black">Proposal:</span> After the consultation, you’ll receive a tailored proposal for review.</p>
                  <BIconChevronRight class="step-icon ml-auto" />
                </div>
                <div class="step col-12 col-md-3 d-flex align-items-center">
                  <h4 class="step-number">4</h4>
                  <p class="step-text mb-0"><span style="color: black">Project Kickoff:</span> Once agreed, we start the project, keeping you informed throughout.</p>
                </div>
                </div>
              
            </div>
            <b-col lg="6" class="d-lg-none d-sm-block">
                <b-card no-body class="card-body shadow border p-sm-5 m-3">                 
                  <h1 class="mb-5 h3">Let's level up your brand, together</h1>

                  <b-form class="row g-4">
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
                      <b-form-group
                        label="Last name *"
                        label-for="last_name"
                        label-class="heading-color"
                      >
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
                      <b-form-group
                        label="Email address *"
                        label-for="email"
                        label-class="heading-color"
                      >
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
                      <b-form-group
                        label="Services *"
                        label-for="service_id"
                        label-class="heading-color"
                      >
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
                      <b-button type="submit" class="mb-0" variant="primary" size="lg">
                        Send a message
                      </b-button>
                    </b-col>
                  </b-form>
                  </b-card>
            </b-col>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { lists } from '@/views/demos/CreativeAgency/data'

import { BIconChevronRight, BIconPatchCheckFill } from 'bootstrap-icons-vue'

// import { useServices } from '@/views/demos/CreativeAgency/Services/composables/service'
// import { useContactForm } from '@/views/demos/CreativeAgency/Services/composables/contact'
// import type { ContactUsBody } from '@/views/demos/CreativeAgency/Services/types/ContactUsBodyType'

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

<style scoped>

.step {
    margin-bottom: 20px; /* إضافة مسافة بين الخطوات */
  }

  .step-number {
    font-size: 2rem; /* حجم الخط للرقم */
    margin-right: 10px; /* مسافة بين الرقم والنص */
    color: black; /* لون الرقم */
  }

  .step-text {
    flex-grow: 2; /* لتمدد النص ليأخذ المكان المتبقي */
  }

  .step-icon {
    font-size: 3rem; /* حجم الرمز */
    color: black; /* لون الرمز */
  }

  @media (min-width: 576px) {
    .step {
      flex: 0 0 48%; /* عرض الخطوة بنسبة 48% للأجهزة الأكبر */
    }
  }

  @media (min-width: 768px) {
    .step {
      flex: 0 0 22%; /* عرض الخطوة بنسبة 22% للأجهزة الكبيرة */
    }
  }

</style>