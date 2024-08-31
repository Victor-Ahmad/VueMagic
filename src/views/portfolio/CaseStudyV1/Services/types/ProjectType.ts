export interface projects {
  id: number;
  title: string;
  description: string;
  time_in_days: number;
  time: string;
  result: string;
  client: Client;
  service_categories: string[];
  achievements: Achievement[];
  project_technologies: Technology[];
  project_images: ProjectImage[];
  challenges: Challenge[];
  project_live_links: { link: string }[];
}

export interface Client {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

export interface Achievement {
  achievement_name: string;
}

export interface Technology {
  tools: string;
}

export interface ProjectImage {
  image_path: string;
}

export interface Challenge {
  challenge_name: string;
  challenge_description: string;
}



  
  export interface ProjectsResponse {
    success: number;
    result: projects[];
    message: string;
  }