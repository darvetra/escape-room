import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';

import {Genres} from '../const';
import { getFilterMoviesByGenre } from '../utils';

import { questsList } from '../mocks/quests';


const initialState = {
  genre: Genres.All,
  quests: questsList,
};

const reducer = (state: State = initialState, action: Actions) : State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.GetQuestList:
      return {...state, quests: getFilterMoviesByGenre(action.payload, state.genre)};
    default:
      return state;
  }
};

export {reducer};
