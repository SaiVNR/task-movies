import ACTION from "../actions/actionTypes"
import initialState from "../store/initialState";

export default function(state = initialState,action) {
    switch (action.type) {
        case ACTION.ADD_MOVIE_TO_MOVIE_DATA : {
            var moviesData = state.moviesData;
            if(moviesData === null) {
                moviesData = [];
            }
            moviesData.push(action.payload);
            return {
                moviesData:moviesData,
                areMoviesFound:true,
                showSearch : true,
                movieBannerData : null,
                totalNumberOfMoviesFound:state.moviesData.length,
                displayMessage : "Enter your movie"
            }
        }

        case ACTION.ADD_MOVIE_TO_MOVIE_DATA_GENRE : {
            moviesData = state.moviesData;
            if(moviesData === null) {
                moviesData = [];
            }
            moviesData.push(action.payload);
            return {
                ...state,
                moviesData:moviesData,
                areMoviesFound:true,
                showSearch : false,
                totalNumberOfMoviesFound:state.moviesData.length,
                displayMessage : "Enter your movie"
            }
        }
        
        case ACTION.CLEAR_MOVIE_DATA : {
            return {
                ...state,
                moviesData:[],
                areMoviesFound: false,
                showSearch : true,
                totalNumberOfMoviesFound:0,
                displayMessage : "Enter your movie"
            }
        }

        case ACTION.ADD_MOVIE_BANNER_DATA : {
            return {
                ...state,
                areMoviesFound:true,
                showSearch : false,
                movieBannerData : action.payload,
                totalNumberOfMoviesFound:state.moviesData.length,
                displayMessage : "Enter your movie"
            }    
        }

        case ACTION.SET_SEARCH : {
            return {
               ...state,
               showSearch : action.payload
            } 
        }

        case ACTION.SET_DISPLAY_MESSAGE : {
            return {
                ...state,
                displayMessage : action.payload
             } 
        }
        default: return state;
    }
}