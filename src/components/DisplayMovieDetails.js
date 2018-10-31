import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import fetchData from "../utils/FetchData"

import Body from "./Body"
import MovieBanner from "./MovieBanner";

import '../css/App.css';
import '../css/Header.css';

import {addMovieBannerData,addMovieBannerDataGenre,clearMovieData,setDisplayMessage} from "../actions/action"



class DisplayMovieDetails extends Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
    static getGenreData(genre, props) {
      props.clearMovieData();
      props.setDisplayMessage("Searching related genre Movies...")
      let url = fetchData.buildUrl(genre, "genres");
      fetchData.getData(url)
        .then(jsonData => jsonData.data)
        .then(data => data.map(d => props.addMovieBannerDataGenre(d)))
    }

    static getDerivedStateFromProps(props, state=null) {
      props.setDisplayMessage("Searching...")
      const url = 'http://react-cdp-api.herokuapp.com/movies/' + props.match.params.id
      fetchData.getData(url)
        .then(jsonData => {
          props.addMovieBannerData(jsonData);
          DisplayMovieDetails.getGenreData(jsonData.genres[0], props)
        });
      return state;
    }

    render() {
          return (
            <div className="App row ">    
              <MovieBanner />
              <Body/>
            </div>
          );
        
    }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      addMovieBannerDataGenre: addMovieBannerDataGenre,
      addMovieBannerData:addMovieBannerData,
      clearMovieData:clearMovieData,
      setDisplayMessage:setDisplayMessage
  }, dispatch);
}

export default connect(null,mapDispatchToProps)(DisplayMovieDetails);
