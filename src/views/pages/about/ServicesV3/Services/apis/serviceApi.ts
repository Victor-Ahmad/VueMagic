
import axiosInstance from '@/connectivity/axios/axiosInstance';
import type { ServicesResponse } from '../composables/types/ServiceType';

export const fetchServices = async (): Promise<ServicesResponse> => {
  try {
    const response = await axiosInstance.get<ServicesResponse>('/services');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

