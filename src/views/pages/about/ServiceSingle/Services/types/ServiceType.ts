export interface Service {
  name: string;
  description: string;
  requirments: requirments[];
  service_benefits:  service_benefits[];
  client_testimonial:  client_testimonial[];
  service_processes: service_processes[];
}

export interface requirments {
  name: string;
  description: string;
}

export interface service_benefits {
  name: string;
  description: string;
}

export interface client_testimonial {
  client_name: string;
  client_testimonial: string;
}

export interface service_processes {
  name: string;
  process_procedures: process_procedures[];
}

export interface  process_procedures {
  name: string;
  description: string;
}

export interface ServicesResponse {
  success: number;
  result: Service[];
  message: string;
}
