import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quest-item.styled';

import type { QuestType } from '../../../../types/quest';

import { getDifficultLevel } from '../../../../utils';

import { useHistory } from 'react-router-dom';

type QuestItemProps = {
  quest: QuestType;
}

const QuestsItem = ({quest}: QuestItemProps) => {
  const history = useHistory();

  return (
    <>
      <S.QuestItem onClick={() => history.push(`/detailed-quest/${quest.id}`)}>
        {/*<S.QuestItemLink to={`/detailed-quest/${quest.id}`}>*/}
        <S.QuestItemLink to={''}>
          <S.Quest>
            <S.QuestImage
              src={quest.previewImg}
              width="344"
              height="232"
              alt={`квест ${quest.title}`}
            />

            <S.QuestContent>
              <S.QuestTitle>{quest.title}</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  {quest.peopleCount[0]}–{quest.peopleCount[1]} чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  {getDifficultLevel(quest.level)}
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>
    </>
  )
};

export default QuestsItem;
