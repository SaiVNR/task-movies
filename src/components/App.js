import React, { Component } from 'react';
import {connect} from 'react-redux';

import Body from "./Body"
import Search from './Search';

import '../css/App.css';
import '../css/Header.css';

class App extends Component {

  render() {
    return (
      <div className="App row ">    
      <Search/>
      <Body />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieReducer:state.movieReducer
  };
}

export default connect(mapStateToProps)(App);
