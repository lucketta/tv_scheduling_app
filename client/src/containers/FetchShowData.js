import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Link,Redirect,} from 'react-router-dom';
import ShowTvShows from './ShowTvShows';
import fetch from 'isomorphic-fetch';


class FetchShowData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show_array: []
    }
  }

  FetchTvShow() {
    const that = this;

    return fetch('/api/shows')
        .then(res => {
          return res.json();
          debugger;
        }).then(json => {
          that.state.show_array = json;
      })
  }

  componentWillMount () {
    this.FetchTvShow();
  }

  componentDidUpdate(prevProps, prevState) {
    this.FetchTvShow();
  }

  render(){
    return (
      <div>
        <ShowTvShows printArray={this.state.show_array}/>
      </div>
    );
  }
}

export default FetchShowData;
