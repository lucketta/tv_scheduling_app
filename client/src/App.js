import React, { Component } from 'react';
import './App.css';
import PopularShowCarousel from './containers/PopularShowCarousel';
import DisplayShowButtons from './containers/DisplayShowButtons';
import {BrowserRouter as Router} from 'react-router-dom';
import {Button, Glyphicon} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
        <Router>
        <div>
        <header className="App-header">
          <h1 className="App-title">
              TV Scheduling App

              <div id="search" className="Search">
                <input className="fa fa-search" type="search" placeholder="Search for a title..."></input>

                <Button className="Search_Button"> <Glyphicon glyph="glyphicon glyphicon-search" className="Glyph"/></Button>

            </div>
            <div className="Profile">
                <ul>
                  <li><Button className="Profile_Button"> Sign In </Button></li>
                  <li><Button className="Profile_Button"> Log In </Button></li>
                </ul>
            </div>
          </h1>
        </header>

        <PopularShowCarousel />
        <hr className="Hr-Up"/>

        <DisplayShowButtons />

        </div>
        </Router>
    );
  }
}

export default App;
