import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import { Modal2Provider } from './context/Modal2';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Modal2Provider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </Modal2Provider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
