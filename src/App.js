import React, { Component } from 'react';
import { HomePage } from './screens/HomePage/index';
import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
