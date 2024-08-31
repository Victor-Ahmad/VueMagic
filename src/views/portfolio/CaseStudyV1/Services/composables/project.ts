import { ref } from 'vue';
import { fetchProjects } from '../apis/projectApi';
import type { Project } from '../types/ProjectType';


export function UseProjects() {
  const projects = ref<Project[] | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const loadProjects = async () => {
    loading.value = true;
    error.value = null;

    try {
      const data = await fetchProjects();
      projects.value = data.result;
    
    } catch (err) {
      error.value = 'Failed to load projects';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    projects,
    loading,
    error,
    loadProjects,
  };
}













