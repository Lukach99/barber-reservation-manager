export interface Reservation {
  key?: string | null;
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  createdAt: string;
  date: string;
  time: string;
  timeSlots: any[];
  worker_Id: string;
}
