import React, { Component } from 'react';
import './App.css';
import PopularShowCarousel from './containers/PopularShowCarousel';
import DisplayShowButtons from './containers/DisplayShowButtons';
import SearchShows from './containers/SearchShows';
import ShowTvShows from './containers/ShowTvShows';
import {BrowserRouter as Router} from 'react-router-dom';
import {Button, Glyphicon} from 'react-bootstrap';
import {Grid, Col, Thumbnail} from 'react-bootstrap';


class App extends Component {
  constructor () {
    super();

    this.state = {
      showSearched: [],
    }
  }

  handlePrintShows = (info) => {
    this.setState({showSearched: info});
  }


  render() {
    return (
        <Router>
        <div>
        <header className="App-header">
          <h1 className="App-title">
              TV Scheduling App

            <SearchShows searchedShow={this.handlePrintShows}/>

            <div className="Profile">
                <ul>
                  <li><Button className="Profile_Button"> Sign In </Button></li>
                  <li><Button className="Profile_Button"> Log In </Button></li>
                </ul>
            </div>
          </h1>
        </header>

        <PopularShowCarousel />
        <DisplayShowButtons displayShows={this.handlePrintShows}/>

        <ShowTvShows printArray={this.state.showSearched}/>

        </div>
        </Router>
    );
  }
}

export default App;
