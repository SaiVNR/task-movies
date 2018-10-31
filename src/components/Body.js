import React, { Component } from 'react';
import {connect} from 'react-redux';

import ListItem from "./ListItem"

import '../css/App.css';
import '../css/Body.css';




class Body extends Component {
    render() {
        const data = this.props.movieReducer.moviesData;
        if(!this.props.movieReducer.areMoviesFound ) {
            return (
                <div className="text-center">
                    <h1>{this.props.movieReducer.displayMessage}</h1>
                </div>      
            );
        }
        let i = 1;
        return (
                <div className="container belowBody">
                  {
                        data.map((movie)=>
                            (i++%3 === 0)
                            ? <div key={Math.random()} className="row"> 
                                <ListItem  key={movie.id+Math.random()*10} movieData={movie}/>
                                </div>
                            : <ListItem  key={movie.id+Math.random()*10} movieData={movie} />
                        )
                  }
                </div>  
            );
    }
}

function mapStateToProps(state) {
    return {
        movieReducer: state.movieReducer
    };
}


export default connect(mapStateToProps)(Body);