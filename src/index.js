import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import ErrorPage from "./components/ErrorPage"
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch } from 'react-router-dom'
import history from "./utils/history"
import {createStore} from  'redux';
import {Provider} from 'react-redux';
import allReducers from "./reducers/rootReducer"
import DisplayMovieDetails from './components/DisplayMovieDetails';

console.log("Search your Favorite Movie")

const store = createStore(allReducers);
ReactDOM.render(<Provider store={store}>
                    <Router history={history}>
                        <Switch>
                            <Route path="/displayMovieDetails/:id" component={DisplayMovieDetails} />
                            <Route exact path="/" component={App} />
                            <Route path="/*" component={ErrorPage} />
                        </Switch>
                    </Router>
                </Provider>,
                document.getElementById('header'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
