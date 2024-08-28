export interface ContactUsResponse {
    success: number;
    result: null | {
      first_name: string;
      last_name: string;
      email: string;
      mobile_number: string;
      updated_at: string;
      created_at: string;
      id: number;
    };
    message: string | {
      [key: string]: string[];
    };
  }