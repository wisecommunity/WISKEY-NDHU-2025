export interface StudentReflection {
  name: string;
  time: string;
  note?: string; // Additional context like "Dunning-Kruger effect"
  strategy?: string;
  execution?: string;
  choice?: string;
  legacy?: string;
  general?: string; // For comments that don't fit the 4 categories strictly
}

export enum SessionStatus {
  COMPLETED = '已結束',
  UPCOMING = '即將開始',
  PLANNING = '建置中'
}

export interface CourseSession {
  id: string;
  title: string;
  date: string;
  time: string;
  format: '線上' | '實體';
  status: SessionStatus;
  description: string;
  themeColor: string;
}
