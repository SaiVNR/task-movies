import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import '../css/App.css';

import history from '../utils/history';
import {addMovieBannerDataGenre,addMovieBannerData,clearMovieData,setSearch} from "../actions/action"

class ListItem extends Component {

    constructor(props) {
        super(props);
        this.setMovieBanner = this.setMovieBanner.bind(this);
    }


    setMovieBanner() {
        history.push('/displayMovieDetails/'+this.props.movieData.id);
    }


    render() {
    	const data = this.props.movieData;
        return (
            <>
                <div className="col-sm-4 text-center">
                    <div className="panel panel-primary">
                    <div className="panel-heading"><strong><h4>{data.title}</h4></strong></div>
                        <div className="panel-body">
                            <img src={data.poster_path} alt={data.title} className="movieBanner" />
                        </div> 
                        <div className="panel-footer text-left">      
                            <h5>Released on: {data.release_date}</h5>
                            <h5>Rating: {data.vote_average}</h5>
                            <p id="overview">{data.overview} </p>
                            <h5> Genre: {data.genres.join(", ")}</h5>
                            <center><button type="button" onClick={this.setMovieBanner} className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal"  >Description</button></center>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addMovieBannerDataGenre: addMovieBannerDataGenre,
        addMovieBannerData:addMovieBannerData,
        clearMovieData:clearMovieData,
        setSearch:setSearch
    }, dispatch);
  }


export default connect(null,mapDispatchToProps)(ListItem);


