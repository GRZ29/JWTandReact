import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store, StoreContext } from './stores/store';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>,
  rootElement);

registerServiceWorker();

