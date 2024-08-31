export interface Project {
  id: number;
  title: string;
  description: string;
  categories: string[];
    image: string;  
  // category: string;
  // image: string;    
  // year: string;      
  // tags: string[];   
  // company: {
  //   image: string;  
  // };
  // route: string;     
}

export interface ProjectsResponse {
  success: number;
  result: Project[];
  message: string;
}
