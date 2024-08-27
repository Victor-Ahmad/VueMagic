export interface Service {
    id: number;
    name: string;
    description: string;
  }
  
  export interface ServicesResponse {
    success: number;
    result: Service[];
    message: string;
  }