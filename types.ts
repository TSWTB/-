
export enum ViewType {
  DASHBOARD = 'DASHBOARD',
  ASSESSMENT = 'ASSESSMENT',
  TRAINING = 'TRAINING',
  PARENT = 'PARENT',
  REPORT = 'REPORT'
}

export interface Word {
  id: string;
  word: string;
  phonics: string;
  translation: string;
  contextSentence: string;
  level: number;
  status: 'new' | 'learning' | 'mastered' | 'review';
}

export interface BrainStats {
  memory: number;
  logic: number;
  focus: number;
  speed: number;
  creativity: number;
}

export interface UserProgress {
  streak: number;
  totalWords: number;
  masteredCount: number;
  brainPower: number;
  percentile: number;
}
