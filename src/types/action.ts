import { changeGenre, getQuestList } from '../store/action';

export enum ActionType {
  ChangeGenre = 'list/changeGenre',
  GetQuestList  = 'list/getQuestList',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getQuestList>;
