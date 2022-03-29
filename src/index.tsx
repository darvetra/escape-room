import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import { reducer } from './store/reducer';

// моки
import { questsList } from './mocks/quests';
const quest = questsList[0];

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App quests={questsList} quest={quest} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
