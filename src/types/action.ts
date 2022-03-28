export enum ActionType {
  ChangeGenre = 'list/changeGenre',
  GetQuestList = 'list/getQuestList',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type Actions = ChangeGenreAction;
