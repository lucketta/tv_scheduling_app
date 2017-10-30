import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class DisplayShowButtons extends Component {
  handleOnClick = (event) => {
    this.FetchTvShow(event.target.pathname);
  }

  FetchTvShow(pathToFetch) {
    var requestUrl = 'https://api.themoviedb.org/3/tv/';

    switch (pathToFetch) {
      case '/popular':
        requestUrl += 'popular'
        break;
      case '/top-rated':
        requestUrl += 'top_rated'
        break;
      case '/on-air':
        requestUrl += 'on_the_air'
        break;
      case '/airing-today':
        requestUrl += 'airing_today'
        break;
      default:
        requestUrl = "";
    }

    requestUrl += '?api_key=6c9ca5f9c165a06d30f01771e5b3a8ec&language=en-US&page=1';

    return fetch(requestUrl)
        .then(res => {
          return res.json();
        }).then(json => {
          return json.results;
      }).then(result => {
        this.props.displayShows(result);
      }).catch((err)=>{
        console.log(err);
      })
  }

  render(){
    return (
      <div>
        <div className="ButtonGroup" id="content">
          <Link to="/popular" className="Button" data-primary="true" onClick={this.handleOnClick.bind(this)}>Popular Shows</Link>
          <Link to="/top-rated" className="Button" data-primary="true" onClick={this.handleOnClick.bind(this)}>Top Rated</Link>
          <Link to="/on-air" className="Button" data-primary="true" onClick={this.handleOnClick.bind(this)}>On the Air</Link>
          <Link to="/airing-today" className="Button" data-primary="true" onClick={this.handleOnClick.bind(this)}>Airing Today</Link>
        </div>
      </div>

    );
  }
}

export default DisplayShowButtons;
