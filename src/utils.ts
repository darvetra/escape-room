import { DifficultLevel, GenreRus } from './const';

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
    return GenreRus.adventure;
  }

  if (genre === 'horror') {
    return GenreRus.horror;
  }

  if (genre === 'mystic') {
    return GenreRus.mystic;
  }

  if (genre === 'detective') {
    return GenreRus.detective;
  }

  if (genre === 'sci-fi') {
    return GenreRus['sci-fi'];
  }

  return 'Incorrect genre';
};
