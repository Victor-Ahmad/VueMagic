<template>
  <div class="fixed-contact-button">
    <b-button variant="primary" class="btn-icon" @click="goToContact">
      <span class="btn-content">
        <BIconTelephone class="me-2" />
      </span>
    </b-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { BIconTelephone } from 'bootstrap-icons-vue'

const router = useRouter()

const goToContact = () => {
  router.push({ name: 'contact.v1' }).then(() => {
    window.scrollTo(0, 0)
  })
}
</script>

<style scoped>
.fixed-contact-button {
  position: fixed;
  bottom: 5%;
  right: 0;
  transform: translateY(50%);
  z-index: 1000;
  display: none;
}

.btn-icon {
  border-radius: 10px 0 0 10px;
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  overflow: hidden;
  white-space: nowrap;
  animation: toggleContent 4s infinite ease-in-out;
}

.btn-content {
  display: flex;
  align-items: center;
  transition: width 0.5s ease;
}

@media (max-width: 768px) {
  .fixed-contact-button {
    display: block;
  }
}

@keyframes toggleContent {
  0%,
  25% {
    width: 0;
  }
  30%,
  75% {
    width: 100px;
    opacity: 1;
  }
  80%,
  100% {
    width: 0;
  }
}

.btn-icon {
  animation: toggleContent 4s infinite ease-in-out;
}

.btn-content {
  animation: fadeText 4s infinite ease-in-out;
}

@keyframes fadeText {
  0%,
  25% {
    opacity: 0;
    margin-left: 0;
  }
  30%,
  75% {
    opacity: 1;
    margin-left: 10px;
  }
  80%,
  100% {
    opacity: 0;
    margin-left: 0;
  }
}
</style>
