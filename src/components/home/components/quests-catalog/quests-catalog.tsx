import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';

import { changeGenre } from '../../../../store/action';

import { State } from '../../../../types/state';
import { Actions } from '../../../../types/action';

import { Genres } from '../../../../const';
import { getFilterMoviesByGenre } from '../../../../utils';

import GenresList from '../genres-list/genres-list';

// import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
// import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
// import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
// import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
// import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
// import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';

import QuestItem from '../quest-item/quest-item';


const mapStateToProps = ({quests, genre}: State) => ({
  quests,
  activeGenre: genre,
});

// Без использования bindActionCreators
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeGenre(genre: Genres) {
    dispatch(changeGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

// Сделать вкладку активной ! вылетает ошибка

const QuestsCatalog = (props: ConnectedComponentProps) => {
  const { quests, activeGenre, onChangeGenre } = props;
  const genres = Object.values(Genres) as Genres[];

  // const showQuests = getFilterMoviesByGenre(quests, activeGenre);

  return (
  <>
    <S.Tabs>

      <GenresList genres={genres} activeGenre={activeGenre} onChangeGenre={onChangeGenre}/>

    </S.Tabs>

    <S.QuestsList>

      {quests.map((quest) => <QuestItem quest={quest} key={quest.id} />)}

    </S.QuestsList>
  </>
  )
};

export {QuestsCatalog};
export default connector(QuestsCatalog);
