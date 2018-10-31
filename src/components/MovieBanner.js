import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import { Link } from 'react-router-dom'

import '../css/MovieBanner.css'


import history from '../utils/history';
import {clearMovieData} from "../actions/action"


class MovieBanner extends Component {

    constructor(props) {
        super(props);
        this.showSearch = this.showSearch.bind(this);
        this.convertMinsToHrsMins = this.convertMinsToHrsMins.bind(this);
    }

    showSearch() {
        this.props.clearMovieData();
        history.push("/");
    }


    convertMinsToHrsMins(mins) {
        let h = Math.floor(mins / 60);
        let m = mins % 60;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        return `${h}:${m}`;
    }


    isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        const individualMovieData = this.props.movieReducer.movieBannerData;
        if(individualMovieData != null) {
            if(!this.isEmpty(individualMovieData)) {
                return(
                    <div>
                        <div className="row fullMovieBanner">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2">
                        <img src={individualMovieData.poster_path} alt={individualMovieData.title} className="movieBanner" />
                        <h3 className="text-white">Movies with same genre: {individualMovieData.genres[0]}</h3>
                        </div>               
                        <div className="col-sm-8">
                        <div className="row">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-9">
                        <h1 className="text-red inline">{individualMovieData.title+"  "}</h1>
                        <h1 className="circle text-red inline">{individualMovieData.vote_average}</h1>
                        <div className="text-white">
                        <h3>{individualMovieData.tagline}</h3>
                        <h3>{individualMovieData.release_date.split("-")[0]}</h3>
                        <h3>{this.convertMinsToHrsMins(individualMovieData.runtime)} hrs</h3>
                        </div>
                        <div className="row text-white">
                        <div className="col-sm-10">
                        <h4>{individualMovieData.overview}</h4>
                        </div>
                        <div className="col-sm-2"></div>
                        </div>
                        </div>
                        
                        <div className="col-sm-2">
                        <button onClick={()=>{this.showSearch()}} className="btn-danger form-control">Search</button> </div>
                        </div>
                        </div>
                        </div>
                    </div> 
                );
            } else {
                return (
                    <div className="text-center">
                        <h1> 404! Page not Found... You can still Navigate to home </h1>
                        <Link to="/"> <h3>Go Home </h3></Link>
                    </div>
                )
            }
        } else {
            return (
                <div className="text-center">
                    <h1> Loading...Please Wait </h1>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
  return {
    movieReducer:state.movieReducer
  };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        clearMovieData:clearMovieData
    }, dispatch);
  }

export default connect(mapStateToProps,mapDispatchToProps)(MovieBanner);