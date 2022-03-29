import { QuestsType } from './quest';

export enum ActionType {
  ChangeGenre = 'list/changeGenre',
  GetAllGenres = 'list/getAllGenres',
}

export type ChangeGenreActionType = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type GetAllGenresActionType = {
  type: ActionType.GetAllGenres;
  payload: QuestsType;
};

export type Actions = ChangeGenreActionType | GetAllGenresActionType;
