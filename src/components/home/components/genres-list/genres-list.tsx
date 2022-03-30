import { Genres } from '../../../../const';

import * as S from '../quests-catalog/quests-catalog.styled';
// import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
// import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
// import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
// import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
// import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';

type GenresListProps = {
  genres: Genres[],
  activeGenre: Genres,
  onChangeGenre: (genre: Genres) => void,
}

const GenresList = ({genres, activeGenre, onChangeGenre}: GenresListProps) => {

  /*<S.TabBtn isActive>*/

  return (
    <>
      <S.Tabs>
        {genres.map((genre) => (

        <S.TabItem>
          <S.TabBtn >
            <IconAdventures />
            <S.TabTitle>{genre}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        ))}
      </S.Tabs>

    </>

  // <>
  //   <S.Tabs>
  //     <S.TabItem>
  //       <S.TabBtn>
  //         <IconAdventures />
  //         <S.TabTitle>Приключения</S.TabTitle>
  //       </S.TabBtn>
  //     </S.TabItem>
  //   </S.Tabs>
  // </>
  )
};

export default GenresList;
