import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import store from './store'

import Header from './common/Header'

class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
