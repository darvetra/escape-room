import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFound from '../not-found/not-found';
import { appTheme } from './common';
import * as S from './app.styled';

import { AppRoute } from '../../const';
import type { QuestType, QuestsType } from '../../types/quest';

type AppProps = {
  quest: QuestType,
  quests: QuestsType,
}

const App = ({quests, quest}: AppProps) => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppRoute.Quest}>
          <DetailedQuest quest={quest}/>
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Home}>
          <Home quests={quests} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;