export interface About {
  id:number
  company_name: string;
  introduction: string;
  our_mission: string;
  our_goals: string;
  title_for_who: string;
  title_steps_process: string;
  meet_our_team: string;
  our_partners_associates: string;
  end: string;
  steps_process: steps_process[];
  client_testimonial:client_testimonial[];
  for_who_services:for_who_services[];

}

export interface steps_process {
  step_no: string;
  process_name: string;
  process_description: string;
}

export interface client_testimonial {
  client_name: string;
  client_testimonial: string;
}
export interface for_who_services {
  name_of_service_for_who: string;
  description_of_service_for_who: string;
}

export interface AboutResponse {
  success: number;
  result: About[];
  message: string;
}
