import React, { Component } from 'react';
import './App.css';
import PopularShowCarousel from './containers/PopularShowCarousel';
import DisplayShowButtons from './containers/DisplayShowButtons';
import SearchShows from './containers/SearchShows';

import {BrowserRouter as Router} from 'react-router-dom';
import {Button, Glyphicon} from 'react-bootstrap';


class App extends Component {

  handleSearchedShow = (info) => {
    console.log(info);
    
  }


  render() {
    return (
        <Router>
        <div>
        <header className="App-header">
          <h1 className="App-title">
              TV Scheduling App

            <SearchShows searchedShow={this.handleSearchedShow}/>

            <div className="Profile">
                <ul>
                  <li><Button className="Profile_Button"> Sign In </Button></li>
                  <li><Button className="Profile_Button"> Log In </Button></li>
                </ul>
            </div>
          </h1>
        </header>

        <PopularShowCarousel />
        <DisplayShowButtons />



        </div>
        </Router>
    );
  }
}

export default App;
