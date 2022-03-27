import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

import { QuestsType } from '../../types/quest';

type HomePageProps = {
  quests: QuestsType;
}

const HomePage = ({quests}: HomePageProps) => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>Выберите тематику</PageTitle>
        <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
      </PageHeading>
      <QuestsCatalog quests={quests} />
    </S.Main>
  </MainLayout>
);

export default HomePage;
