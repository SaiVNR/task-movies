import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../css/ErrorPage.css';
class ErrorPage extends Component {
    render() {
        console.log("errors")
        return (
            <div className="text-center">
                <h1> 404! Page not Found... You can still Navigate to home </h1>
                <Link to="/"> <h3>Go Home </h3></Link>
            </div>
        );
    }
}

export default ErrorPage;
