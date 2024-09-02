// import { ref } from 'vue';
// import { fetchProjects } from '../apis/projectsApi';
// import type { Project } from '../types/ProjectsType';

// export function useProjects() {
//   const projects = ref<Project[] | null>(null);
//   const loading = ref<boolean>(false);
//   const error = ref<string | null>(null);
//   const loadProjects = async () => {
//     loading.value = true;
//     error.value = null;

//     try {
//       const data = await fetchProjects();
//       projects.value = data.result;
    
//     } catch (err) {
//       error.value = 'Failed to load projects';
//       console.error(err);
//     } finally {
//       loading.value = false;
//     }
//   };

//   return {
//     projects,
//     loading,
//     error,
//     loadProjects,
//   };
// }

// import { ref, computed } from 'vue';
// import { fetchProjects } from '../apis/projectsApi';
// import type { Project } from '../types/ProjectsType';

// export function useProjects() {
//   const projects = ref<Project[]>([]);
//   const loading = ref<boolean>(false);
//   const error = ref<string | null>(null);
//   const selectedCategory = ref<string>('*');

//   const loadProjects = async () => {
//     loading.value = true;
//     error.value = null;

//     try {
//       const data = await fetchProjects();
//       projects.value = data.result;
//     } catch (err) {
//       error.value = 'Failed to load projects';
//       console.error(err);
//     } finally {
//       loading.value = false;
//     }
//   };

//   const filteredProjects = computed(() => {
//     if (selectedCategory.value === '*') {
//       return projects.value;
//     }
//     return projects.value.filter((project) =>
//       project.categories.includes(selectedCategory.value)
//     );
//   });

//   const filterCategory = (category: string) => {
//     selectedCategory.value = category;
//   };

//   return {
//     projects,
//     loading,
//     error,
//     loadProjects,
//     filteredProjects,
//     selectedCategory,
//     filterCategory,
//   };
// }


import { ref, computed } from 'vue';
import { fetchProjects } from '../apis/projectsApi';
import type { Project } from '../types/ProjectsType';

export function useProjects() {
  const projects = ref<Project[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const selectedCategory = ref<string>('*');

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

  const filteredProjects = computed(() => {
    if (selectedCategory.value === '*') {
      return projects.value;
    }
    return projects.value.filter((project) => {
      const searchTerm = selectedCategory.value.toLowerCase();
      return (
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm)
      );
    });
  });

  const filterCategory = (category: string) => {
    selectedCategory.value = category;
  };

  return {
    projects,
    loading,
    error,
    loadProjects,
    filteredProjects,
    selectedCategory,
    filterCategory,
  };
}
