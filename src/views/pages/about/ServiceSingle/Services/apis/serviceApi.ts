
import axiosInstance from '@/connectivity/axios/axiosInstance';
import type { ServicesResponse } from '../types/ServiceType';

export const fetchServices = async (id: string | number): Promise<ServicesResponse> => {
  try {
    const response = await axiosInstance.get<ServicesResponse>('/service/show/${id}');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

