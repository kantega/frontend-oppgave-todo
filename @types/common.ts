import { ReactNode } from 'react';
import type { UniqueIdentifier } from '@dnd-kit/core';

export type Column = {
  id: UniqueIdentifier;
  title: string;
};

export enum TaskDifficulty {
  EASY = '😊',
  MEDIUM = '😬',
  HARD = '👿',
  UNKNOWN = '💀',
}

export enum TaskCategory {
  CODING = 'koding',
  STYLING = 'stiling',
  TESTING = 'testing',
  DISCUSSION = 'drøfting',
  A11Y = 'a11y',
}

export type Task = {
  title: string | JSX.Element;
  content?: ReactNode;
  completed?: boolean;
  category: TaskCategory[];
  difficulty: TaskDifficulty;
};
