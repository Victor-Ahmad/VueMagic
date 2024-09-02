
import axiosInstance from '@/connectivity/axios/axiosInstance';
import type { HomeResponse } from '../types/HomeType';
export const fetchHome = async (): Promise<HomeResponse> => {
  try {
    const response = await axiosInstance.get<HomeResponse>('/home');
    return response.data;
  } catch (error) {
    console.error('Error fetching home:', error);
    throw error;
  }
};
