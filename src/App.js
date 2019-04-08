import React, { Component } from 'react';
import SearchCategory from './SearchCategory';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="offset-sm-2 col-sm-8">
          <SearchCategory/>
        </div>
      </div>
    );
  }
}

export default App;
