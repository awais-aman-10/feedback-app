import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import projectStore from './store.js';
import './styles.css';

function App() {
  return (
    <Provider store={projectStore}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Provider>
  );
}

export default App;
