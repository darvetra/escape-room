import { DifficultLevel } from './const';

/**
 * Возвращает уровень сложности в читаемом виде
 * @param level
 */
export const getDifficultLevel = (level: string) : string => {
  if (level === 'easy') {
    return DifficultLevel.easy;
  }

  if (level === 'medium') {
    return DifficultLevel.medium;
  }

  if (level === 'hard') {
    return DifficultLevel.hard;
  }

  return 'Incorrect difficult level';
};
