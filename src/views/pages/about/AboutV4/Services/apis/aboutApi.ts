
import axiosInstance from '@/connectivity/axios/axiosInstance';
import type { AboutResponse } from '../types/AboutType'

export const fetchAbout = async (): Promise<AboutResponse> => {
  try {
    const response = await axiosInstance.get<AboutResponse>('/about-us');
    return response.data;
  } catch (error) {
    console.error('Error fetching About:', error);
    throw error;
  }
};

