export interface Project {
    id: number;
    title: string;
    description: string;
  }
  
  export interface ProjectsResponse {
    success: number;
    result: Project[];
    message: string;
  }
  