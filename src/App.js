import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import store from './store'

import Notifaction from './common/Notification'
import Header from './common/Header'
import Home from './pages/Home'
import Login from './pages/Login'

class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <BrowserRouter>
          <div>
            <Header />
            <Notifaction />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
