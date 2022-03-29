import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';

import {Genres} from '../const';

import { questsList } from '../mocks/quests';


const initialState = {
  genre: Genres.All,
  questList: questsList,
};

const reducer = (state: State = initialState, action: Actions) : State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.GetAllGenres:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
