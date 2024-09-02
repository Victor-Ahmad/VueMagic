import { ref } from 'vue';
import { fetchHome} from '../apis/homeApi';
import type { Home } from '../types/HomeType';

export function useHome() {
  const home = ref<Home[] | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const loadHome = async () => {
    loading.value = true;
    error.value = null;

    try {
      const data = await fetchHome();
      home.value = data.result;
    
    } catch (err) {
      error.value = 'Failed to load home page';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    home,
    loading,
    error,
    loadHome,
  };
}
