import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Link,Redirect,} from 'react-router-dom';

class ShowTvShows extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    var test = this.props.printArray;
    return (
      <div>
        {test.map(show => (
          show.name
        ))}
      </div>
    );
  }
}

export default ShowTvShows;
