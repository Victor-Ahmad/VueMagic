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
  
  export interface ContactBody{
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    service_id: '',
    msg: ''
  }
  // export interface form{
  //   first_name: string,
  //   last_name: string,
  //   email: string,
  //   mobile_number: number,
  //   service_id: number,
  //   msg: string
  // }
