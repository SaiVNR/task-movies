import {combineReducers} from 'redux';
import MovieReducer from  "./movieReducer"

const allReducers = combineReducers({
    movieReducer: MovieReducer
});

export default allReducers;