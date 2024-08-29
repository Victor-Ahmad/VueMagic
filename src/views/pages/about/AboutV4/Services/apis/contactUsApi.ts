
import axiosInstance from '@/connectivity/axios/axiosInstance';
import type { ContactUsBody } from '../types/ContactUsBodyType';
import type { ContactUsResponse } from '../types/ContactUsType';

export const submitContactForm = async (data: ContactUsBody): Promise<ContactUsResponse> => {
  const formData = new FormData();
  formData.append('first_name', data.first_name);
  formData.append('last_name', data.last_name);
  formData.append('email', data.email);
  formData.append('mobile_number', data.mobile_number);
  formData.append('msg', data.msg);
  formData.append('service_id', data.service_id.toString());

  try {
    const response = await axiosInstance.post<ContactUsResponse>('/store-contact', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
