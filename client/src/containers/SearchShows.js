import React, {Component} from 'react';
import {Button, Thumbnail, Glyphicon} from 'react-bootstrap';


class SearchShows extends Component {
  constructor() {
    super();

    this.state = {
      searchBar: "",
      show: {},
    }
  }

  handleOnChange = (event) => {
    this.setState({searchBar: event.target.value });
  }

  handleOnClick = (event) => {
    console.log("TESTs")
     this.FetchSearch();
  }

    FetchSearch() {
      var requestUrl = 'https://api.themoviedb.org/3/search/tv?api_key=6c9ca5f9c165a06d30f01771e5b3a8ec&language=en-US&query=' + this.state.searchBar + '&page=1';

      return fetch(requestUrl)
          .then(res => {
            return res.json();
          }).then(json => {
            console.log("here")
            console.log(json.results)
            debugger;
            this.setState({show: json.results[0]})
        }).catch((err)=>{
          console.log(err);
        })
    }

  render(){
    return (
      <div id="search" className="Search">
        <input className="fa fa-search" type="search" placeholder="Search for a title..." onChange={event => this.handleOnChange(event)}></input>

        <Button className="Search_Button"> <Glyphicon glyph="glyphicon glyphicon-search" className="Glyph" onClick={event => this.handleOnClick(event)}/></Button>

            <Thumbnail  alt={this.state.show.name} className="ShowCol" >
              <h3> {this.state.show.name}</h3>
              <p>{this.state.show.overview}</p>
            </Thumbnail>


      </div>

  )}
}

export default SearchShows;
