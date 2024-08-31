
import axiosInstance from '@/connectivity/axios/axiosInstance';
import type { ProjectsResponse } from '../types/ProjectsType';
export const fetchProjects = async (): Promise<ProjectsResponse> => {
  try {
    const response = await axiosInstance.get<ProjectsResponse>('/projects');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
