import React, { Component } from 'react';

import './App.css';
import Header from './skeleton/Header'
import Body from './skeleton/Body';
import Footer from './skeleton/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;
