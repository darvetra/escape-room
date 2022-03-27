import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { questsList } from './mocks/quests';

const quest = questsList[0];

ReactDOM.render(
  <React.StrictMode>
    <App quests={questsList} quest={quest} />
  </React.StrictMode>,
  document.getElementById('root'));
