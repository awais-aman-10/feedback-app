import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes.js';
import { PersistGate } from 'redux-persist/integration/react';
import factory from './store.js';

const { store, persistor } = factory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
