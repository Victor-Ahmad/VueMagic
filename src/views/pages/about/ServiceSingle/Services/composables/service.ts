import { ref } from 'vue';
import { fetchServices } from '../apis/serviceApi';
import type { Service } from '../types/ServiceType';

export function useServices() {
  const services = ref<Service[] | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const loadServices = async (id: string | number) => {
    loading.value = true;
    error.value = null;

    try {
      const data = await fetchServices(id);
      services.value = data.result;
    } catch (err) {
      error.value = 'Failed to load services';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    services,
    loading,
    error,
    loadServices,
  };
}
