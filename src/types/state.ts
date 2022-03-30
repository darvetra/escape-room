import type { QuestsType } from './quest';
import { Genres } from '../const';

export type State = {
  genre: Genres,
  quests: QuestsType,
};
