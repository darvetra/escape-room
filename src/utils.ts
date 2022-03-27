import { DifficultLevel, Genre } from './const';

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

/**
 * Возвращает название жанра в читаемом виде
 * @param genre
 */
export const getGenre = (genre: string) : string => {
  if (genre === 'adventure') {
    return Genre.adventure;
  }

  if (genre === 'horror') {
    return Genre.horror;
  }

  if (genre === 'mystic') {
    return Genre.mystic;
  }

  if (genre === 'detective') {
    return Genre.detective;
  }

  if (genre === 'sci-fi') {
    return Genre['sci-fi'];
  }

  return 'Incorrect genre';
};
