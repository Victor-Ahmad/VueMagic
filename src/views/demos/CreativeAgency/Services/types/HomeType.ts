export interface Home {
  hero_section:hero_section[];
  about_us:about_us[];
  services:services[];
  projects:projects[];
  contact_page:contact_page;
  }
  export interface hero_section {
    id:number;
    title: string;
    sub_title: string;
    image: string;
  }

  export interface about_us {
    company_name: string;
    introduction: string;
    our_mission: string;
    our_goals: string;

  }
  export interface services {
    id:number;
    name: string;
    description: string;
    image: string;
  }
  export interface projects {
    id:number;
    title: string;
    description: string;
    image: string;
  }
  export interface contact_page {
    whats_next:whats_next;
   
  }
  export interface whats_next {
    title: string;
    sub_title: string;
    whats_next_steps: whats_next_steps[];
  }
  export interface  whats_next_steps {
    step_no: string;
    step: string;
  }



  export interface HomeResponse {
    success: number;
    result: Home[];
    message: string;
  }
  