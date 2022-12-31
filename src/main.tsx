import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import {Gatekeeper} from 'gatekeeper-client-sdk';

import App from './App';
import store from './store/store';
import './index.css';

declare const window: any;

window.PF = {
  config: {
    mode: 'bs4'
  }
};

// Gatekeeper.initialize('08401b7e-da7e-4bf3-a9bf-6f594ae5fb02');

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
