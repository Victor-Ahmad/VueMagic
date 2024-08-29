import { ref } from 'vue';
import { submitContactForm } from '../apis/contactUsApi';
import type { ContactUsBody } from '../types/ContactUsBodyType';
import type { ContactUsResponse } from '../types/ContactUsType';

export function useContactForm() {
  const response = ref<ContactUsResponse | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<Record<string, string[]> | null>(null);

  const submitForm = async (formData: ContactUsBody) => {
    loading.value = true;
    error.value = null;
    response.value = null;  

    try {
      const result = await submitContactForm(formData);
      
      response.value = result;

      if (result.success === 1) {
        error.value = null; 
      } else {
        error.value = result.message as Record<string, string[]>;
      }

    } catch (err) {
      error.value = { general: ['An unexpected error occurred. Please try again.'] };
    } finally {
      loading.value = false;
    }
  };

  return {
    response,
    loading,
    error,
    submitForm,
  };
}
