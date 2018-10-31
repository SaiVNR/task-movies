import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import '../css/App.css';
import '../css/Header.css';

import fetchData from "../utils/FetchData"
import {addMovieToMovieData,clearMovieData,setDisplayMessage}  from "../actions/action"

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:props.title,
            value: '',
            isByMovieName:true,
            isByRating:true,
            movieData : []
          };
          
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchByMovie = this.handleSearchByMovie.bind(this);
        this.handleSearchByGenre = this.handleSearchByGenre.bind(this);
        this.handleSortByRating = this.handleSortByRating.bind(this);
        this.handleSortByReleaseDate = this.handleSortByReleaseDate.bind(this);
        this.enterCheck = this.enterCheck.bind(this);
    }

    handleSearchByMovie(e) {
      e.preventDefault();
      this.setState({
        isByMovieName: true
      });
    }

    handleSearchByGenre(e) {
      e.preventDefault();
      this.setState({
        isByMovieName: false
      });
    }

    handleSortByRating(e) {
      e.preventDefault();
      this.setState({
        isByRating: true
      });
    }

    handleSortByReleaseDate(e) {
      e.preventDefault();
      this.setState({
        isByRating: false
      });
    }

    handleChange(event) {
      this.setState({
        value: event.target.value.toLowerCase()
      });
    }

    
    handleSubmit(event) {
      event.preventDefault();
      this.props.clearMovieData();
      this.setState({
        movieData: []
      });
      if (this.state.value.length !== 0) {
        this.props.setDisplayMessage("Searching...")
        let url = fetchData.buildUrl(this.state.value, this.state.isByMovieName ? 'title' : 'genres', this.state.isByRating ? 'vote_average' : 'release_date');
        fetchData.getData(url)
          .then(jsonData => jsonData.data)
          .then(data => {(data.length === 0)?this.props.setDisplayMessage("No Movies Found"):data.map(d => this.props.addMovieToMovieData(d))})
      } else {
        this.props.setDisplayMessage("Enter movie name...")
      }
    }

    enterCheck(event) {
      if (event.keyCode === 13) {
        document.getElementById('btnSearch').click();
      }
    }
      
    render() {
          return(
            <div className="TopContainer text-center ">
            <div className="child-data">
                <form onSubmit={this.handleSubmit} >
                <label>
                <h2 className="siteHeader">Find your Movie</h2>
                <input className="form-control inputText" type="text" value={this.state.value} onChange={this.handleChange} 
                                    onKeyDown = {this.enterCheck}  placeholder={this.state.isByMovieName?'Enter Movie Name': "Enter Genre"}/>
                </label>
                <br/>
                <button className={(this.state.isByMovieName)?'button-margin btn-danger':'button-margin '}  onClick={this.handleSearchByMovie}>Title</button> 
                <button className={(this.state.isByMovieName)?'button-margin ':'button-margin btn-danger'} onClick={this.handleSearchByGenre}>Genre</button>
                <br/>
                <button className={(this.state.isByRating)?'button-margin btn-danger':'button-margin '} onClick={this.handleSortByRating}>Rating</button> 
                <button className={(this.state.isByRating)?'button-margin':'button-margin btn-danger'} onClick={this.handleSortByReleaseDate}>Release Date</button>
                <br/>
                <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4"> <input className="button-margin form-control btn-danger" type="submit" value="Submit" id="btnSearch"/> </div>
                <div className="col-sm-4"></div>
                
                </div>
                </form>
                </div>
                <p className="text-center text-white">Top <span className="badge">{this.props.movieReducer.totalNumberOfMoviesFound}</span> Movie(s) found</p>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    movieReducer:state.movieReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addMovieToMovieData: addMovieToMovieData,
    clearMovieData:clearMovieData,
    setDisplayMessage:setDisplayMessage
  }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);