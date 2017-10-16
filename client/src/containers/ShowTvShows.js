import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Link,Redirect,} from 'react-router-dom';
import {Grid,Row, Col, Thumbnail, Button, Collapse} from 'react-bootstrap';


class ShowTvShows extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    var test = this.props.printArray;
    return (
      <div>
      <Grid className="ShowGrid">
        {test.map((show, index) => (
          <Col xs={6} md={4} >

          <Thumbnail src="/assets/thumbnaildiv.png" alt={show.name} className="ShowCol">
            <h3>{show.name}</h3>
            <p>{show.summary}</p>
          </Thumbnail>

          </Col>
        ))}
        </Grid>
      </div>
    );
  }
}

export default ShowTvShows;
