export enum TabView {
  SUMMARY = 'SUMMARY',
  PROGRAM = 'PROGRAM',
  HABITS = 'HABITS'
}

export interface MetricData {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'neutral';
  description?: string;
}