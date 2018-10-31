import ACTION from "./actionTypes"

export const addMovieToMovieData = (movieDetails) => {
    return {
        type: ACTION.ADD_MOVIE_TO_MOVIE_DATA,
        payload: movieDetails
    }
};

export const clearMovieData = () => {
    return {
        type: ACTION.CLEAR_MOVIE_DATA,
        payload: []
    }
};

export const addMovieBannerData = (value) => {
    return {
        type: ACTION.ADD_MOVIE_BANNER_DATA,
        payload: value
    }
};

export const addMovieBannerDataGenre = (movieDetails) => {
    return {
        type: ACTION.ADD_MOVIE_TO_MOVIE_DATA_GENRE,
        payload: movieDetails
    }
};

export const setSearch = (value) => {
    return {
        type: ACTION.SET_SEARCH,
        payload: value
    }
};

export const setDisplayMessage = (value) => {
    return {
        type: ACTION.SET_DISPLAY_MESSAGE,
        payload: value
    }
}
