import React from 'react';
import './App.scss';
import Home from './pages/Home';
import {Provider} from 'react-redux'
import store from './store/index'

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
