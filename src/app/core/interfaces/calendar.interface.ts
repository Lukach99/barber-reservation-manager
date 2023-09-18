export interface TimeSlot {
  key?: string | null;
  id: string;
  workDayId: string;
  workerId: string;
  date: string;
  time: number;
  status: string;
  reservationId: string;
}

export interface WorkDay {
  key?: string | null;
  id: string;
  date: string;
  timeslots: TimeSlot[];
}
