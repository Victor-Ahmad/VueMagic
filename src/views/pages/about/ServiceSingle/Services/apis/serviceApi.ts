
import axiosInstance from '@/connectivity/axios/axiosInstance';
import type { ServicesResponse } from '../types/ServiceType';

export const fetchServices = async (): Promise<ServicesResponse> => {
  try {
    const response = await axiosInstance.get<ServicesResponse>('/service/show/1');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

