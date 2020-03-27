import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function initApp() {
  ReactDOM.render(
    <React.StrictMode>
      <IntlProvider locale={'en'}>
        <App/>
      </IntlProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (!window.Intl) {
  import('intl').then(() => initApp());
} else {
  initApp();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
