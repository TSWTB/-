
import { Word, BrainStats } from './types';

export const MOCK_WORDS: Word[] = [
  {
    id: '1',
    word: 'Butterfly',
    phonics: 'but-ter-fly',
    translation: '蝴蝶',
    contextSentence: '草地上有一只五彩斑斓的 [Butterfly] 在花丛中飞舞。',
    level: 1,
    status: 'learning'
  },
  {
    id: '2',
    word: 'Brave',
    phonics: 'b-r-a-v-e',
    translation: '勇敢的',
    contextSentence: '虽然天黑了，但他依然表现得很 [Brave]，独自走过了森林。',
    level: 2,
    status: 'new'
  },
  {
    id: '3',
    word: 'Harvest',
    phonics: 'har-vest',
    translation: '收获',
    contextSentence: '农民伯伯在秋天迎来了忙碌的 [Harvest]，果园里到处是欢笑声。',
    level: 3,
    status: 'new'
  }
];

export const INITIAL_BRAIN_STATS: BrainStats = {
  memory: 72,
  logic: 65,
  focus: 80,
  speed: 55,
  creativity: 90
};
