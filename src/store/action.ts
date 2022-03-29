import {ActionType, ChangeGenreActionType, GetAllGenresActionType} from '../types/action';
import { QuestsType } from '../types/quest';

export const ChangeGenre = (genre: string): ChangeGenreActionType => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const GetAllGenres = (questList: QuestsType): GetAllGenresActionType => ({
  type: ActionType.GetAllGenres,
  payload: questList,
});
