import { ref } from 'vue';
import { fetchProject } from '../apis/projectApi';
import type { Project } from '../types/ProjectType';


export function useProject() {
  const Project = ref<Project[] | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const loadProject = async () => {
    loading.value = true;
    error.value = null;

    try {
      const data = await fetchProject();
      Project.value = data.result;
    
    } catch (err) {
      error.value = 'Failed to load project';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    Project,
    loading,
    error,
    loadProject,
  };
}













