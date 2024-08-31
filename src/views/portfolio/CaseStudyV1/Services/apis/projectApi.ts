
import axiosInstance from '@/connectivity/axios/axiosInstance';
import type { ProjectResponse } from '../types/ProjectType';
export const fetchProject = async (): Promise<ProjectResponse> => {
  try {
    const response = await axiosInstance.get<ProjectResponse>('/project/show/1');
    return response.data;
  } catch (error) {
    console.error('Error fetching Project:', error);
    throw error;
  }
};


