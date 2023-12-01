import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';

import initialState from './initialState';

const store = createStore(reducer, initialState);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
