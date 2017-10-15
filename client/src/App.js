import React, { Component } from 'react';
import logo from './logo.svg';
import {Button,ButtonToolbar, Glyphicon} from 'react-bootstrap';
import './App.css';
import PopularShowCarousel from './containers/PopularShowCarousel';
import DisplayShowButtons from './containers/DisplayShowButtons';
import {BrowserRouter as Router, Route,Link,Redirect,} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
        <div>

        <header className="App-header">
          <h1 className="App-title">
              TV Scheduling App

              <div id="search" className="Search">
                <input className="fa fa-search" type="search" placeholder="Search for a title..." />
              </div>

              <div className="Profile">
                  <ul>
                    <li> Sign In </li>
                    <li> Log In </li>
                  </ul>
            </div>
          </h1>
        </header>
        <PopularShowCarousel />
        <hr className="Hr"/>

        <DisplayShowButtons />

        </div>
        </Router>
    );
  }
}

export default App;
