import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Link,Redirect,} from 'react-router-dom';
import FetchShowData from './FetchShowData';

class DisplayShowButtons extends Component {
  constructor() {
    super();

    this.state = {
      path: ""
    };
  }


  handleOnClick = (event) => {
    this.state.path = event.target.pathname;
  }
  render(){
    return (
      <div>
        <div className="ButtonGroup">
          <Link to="/popular" className="Button" data-primary="true" onClick={this.handleOnClick.bind(this)}>Popular Shows</Link>
          <Link to="/top-rated" className="Button" data-primary="true" onClick={this.handleOnClick.bind(this)}>Top Rated</Link>
          <Link to="/on-air" className="Button" data-primary="true" onClick={this.handleOnClick.bind(this)}>On the Air</Link>
          <Link to="airing-today" className="Button" data-primary="true" onClick={this.handleOnClick.bind(this)}>Airing Today</Link>
        </div>
        
        <FetchShowData setData={this.state.path}/>

      </div>

    );
  }
}

export default DisplayShowButtons;
