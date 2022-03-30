import { ActionType } from '../types/action';
import { QuestsType } from '../types/quest';
import { Genres } from '../const';

export const changeGenre = (genre: Genres) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const getQuestList = (questList: QuestsType) => ({
  type: ActionType.GetQuestList,
  payload: questList,
} as const);
