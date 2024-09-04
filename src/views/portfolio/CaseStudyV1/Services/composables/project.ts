import { ref } from 'vue';
import { fetchProjects } from '../apis/projectApi';
import type { Project } from '../types/ProjectType';


export function UseProjects() {
  const Project = ref<Project[] | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const loadProjects = async (id: string | number) => {
    loading.value = true;
    error.value = null;

    try {
      const data = await fetchProjects(id);
      Project.value = data.result;
      console.log(" project =====================");
      console.log(data);
    } catch (err) {
      error.value = 'Failed to load projects';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    Project,
    loading,
    error,
    loadProjects,
  };
}













