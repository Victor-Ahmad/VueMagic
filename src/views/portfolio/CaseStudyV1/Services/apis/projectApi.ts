
import axiosInstance from '@/connectivity/axios/axiosInstance';
import type { ProjectsResponse } from '../types/ProjectType';
export const fetchProjects = async (id: string | number): Promise<ProjectsResponse> => {
  try {
    const response = await axiosInstance.get<ProjectsResponse>('/project/show/${id}');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};


