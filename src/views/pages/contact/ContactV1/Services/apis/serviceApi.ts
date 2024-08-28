
import axiosInstance from '@/connectivity/axios/axiosInstance';
import type { ServicesResponse } from '../types/ServiceType';
export const fetchServices = async (): Promise<ServicesResponse> => {
  try {
    const response = await axiosInstance.get<ServicesResponse>('/services');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};
export const submitForm = async (form: Record<string, any>) => {
  try {
    const response = await axiosInstance.post('/store-contact', form);
    if (response.data.success) {
      console.log('Form submitted successfully:', response);
    }
  } catch (error) {
    console.error('Error sending form:', error);
    alert('An error occurred while sending the message.');
  }
};
