import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';

import App from './App';
import store from './store/store';
import './index.css';

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
