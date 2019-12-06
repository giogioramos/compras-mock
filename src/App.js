import React from 'react';
import {Provider} from 'react-redux'
import store from './store/index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.scss';
import Home from './pages/Home/Home';
import Splash from './pages/Splash/Splash';
import Carrinho from './pages/Carrinho/Carrinho';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Splash} />
            <Route path="/shop" exact component={Home} />
            <Route path="/carrinho" render={(props) => <Carrinho {...props} finalizando={true} />} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
