import { ref } from 'vue';
import { fetchAbout } from '../apis/aboutApi';
import type { About } from '../types/AboutType';

export function useAbout() {
  const about = ref<About[] | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const loadAbout = async () => {
    loading.value = true;
    error.value = null;

    try {
      const data = await fetchAbout();
      about.value = data.result;
    } catch (err) {
      error.value = 'Failed to load';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    about,
    loading,
    error,
    loadAbout,
  };
}
