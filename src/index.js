import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './components/app/App';
import initialData from './config';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App initialData={initialData} />
  </Provider>,
  document.getElementById('root')
);
