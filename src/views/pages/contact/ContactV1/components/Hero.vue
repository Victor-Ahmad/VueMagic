<template>
  <section class="pt-xl-8">
    <b-container>
      <b-row class="g-4 g-xxl-5">
        <b-col xl="9" class="mx-auto">
          <img :src="bg02" class="rounded" alt="contact-bg" />

          <b-row class="mt-n5 mt-sm-n7 mt-md-n8">
            <b-col cols="11" lg="9" class="mx-auto">
              <b-card no-body class="shadow p-4 p-sm-5 p-md-6">
                <b-card-header class="border-bottom px-0 pt-0 pb-5">
                  <nav class="mb-3" aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots pt-0">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Contact us</li>
                    </ol>
                  </nav>

                  <h1 class="mb-3 h3">Let's level up your brand, together</h1>
                  <p class="mb-0">You can reach us anytime via <a href="#">example@gmail.com</a></p>
                </b-card-header>

                <b-form @submit.prevent="handleSubmit" class="px-0 pb-0 pt-5">
                  <div class="input-floating-label form-floating mb-4">
                    <input
                      v-model="firstName"
                      type="text"
                      class="form-control bg-transparent"
                      id="floatingName"
                      placeholder="Password"
                      required
                    />
                    <label for="floatingName">First name</label>
                  </div>
                  <div class="input-floating-label form-floating mb-4">
                    <input
                      v-model="lastName"
                      type="text"
                      class="form-control bg-transparent"
                      id="floatingName"
                      placeholder="Password"
                      required
                    />
                    <label for="floatingName">Last name</label>
                  </div>

                  <div class="input-floating-label form-floating mb-4">
                    <input
                      v-model="email"
                      type="email"
                      class="form-control bg-transparent"
                      id="floatingInput"
                      placeholder="name@example.com"
                      required
                    />
                    <label for="floatingInput">Email address</label>
                  </div>

                  <div class="input-floating-label form-floating mb-4">
                    <input
                      v-model="mobileNumber"
                      type="text"
                      class="form-control bg-transparent"
                      id="floatingNumber"
                      placeholder="Password"
                      required
                    />
                    <label for="floatingNumber">Phone number</label>
                  </div>
                  <div class="input-floating-label form-floating mb-4">
                    <select
                      v-model="serviceId"
                      class="primary form-select bg-primary-bg-subtle border-bottom cursor-pointer p-0"
                      id="floatingServices"
                      aria-label="Select a service"
                      required
                    >
                      <option value="" disabled selected>Select a service</option>

                      <option v-for="service in services" :key="service.id" :value="service.id">
                        {{ service.name }}
                      </option>
                    </select>
                    <label for="floatingServices">Services</label>
                  </div>

                  <div class="input-floating-label form-floating mb-4">
                    <textarea
                      v-model="msg"
                      class="form-control bg-transparent"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style="height: 100px"
                      required
                    ></textarea>
                    <label for="floatingTextarea2">Message</label>
                  </div>

                  <b-button
                    type="submit"
                    size="lg"
                    variant="primary"
                    class="mb-0"
                    :disabled="loading"
                    >Send a message</b-button
                  >
                </b-form>
                <div v-if="response && response.success === 1" class="mt-3">
                  <p class="text-success">{{ response.message }}</p>
                </div>

                <div v-if="(response && response.success === 0) || error" class="mt-3 text-danger">
                  <p v-for="(msgs, key) in error" :key="key">
                    <strong>{{ key }}:</strong>
                    <span v-for="msg in msgs" :key="msg">{{ msg }}<br /></span>
                  </p>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg02 from '@/assets/images/bg/02.jpg'
import { ref, onMounted } from 'vue'

import { useServices } from '@/views/pages/contact/ContactV1/Services/composables/service'
import { useContactForm } from '@/views/pages/contact/ContactV1/Services/composables/contact'
import type { ContactUsBody } from '@/views/pages/contact/ContactV1/Services/types/ContactUsBodyType'

const firstName = ref<string>('')
const lastName = ref<string>('')
const email = ref<string>('')
const mobileNumber = ref<string>('')
const msg = ref<string>('')
const serviceId = ref<number | null>(null)

const { services, loadServices } = useServices()
onMounted(() => {
  loadServices()
})

const { submitForm, response, loading, error } = useContactForm()

const handleSubmit = () => {
  const formData: ContactUsBody = {
    first_name: firstName.value,
    last_name: lastName.value,
    email: email.value,
    mobile_number: mobileNumber.value,
    msg: msg.value,
    service_id: serviceId.value ?? 0
  }

  submitForm(formData)
}
</script>

<style scoped>
select.form-select {
  padding: 10px !important;
}

select.form-select option:hover {
  background-color: #198754;
  color: white;
}

select.form-select option:checked {
  background-color: #198754;
  color: white;
}
</style>
