<template>
  <main>
    <CaseStudiesDetails :Project="Project" :loading="loading" :error="error" />

    <RelatedWorks />
  </main>
</template>

<script lang="ts" setup>
import CaseStudiesDetails from '@/views/portfolio/CaseStudyV1/components/CaseStudiesDetails.vue'
import RelatedWorks from '@/views/portfolio/CaseStudyV1/components/RelatedWorks.vue'
import { onMounted } from 'vue'
import { UseProjects } from '@/views/portfolio/CaseStudyV1/Services/composables/project'
import type { SpawnOptions } from 'child_process'

const { Project, loading, error, loadProjects } = UseProjects()
onMounted(() => {
  loadProjects()
})
</script>
