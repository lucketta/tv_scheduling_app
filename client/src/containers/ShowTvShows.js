import React, {Component} from 'react';
import {Grid, Col, Thumbnail} from 'react-bootstrap';


class ShowTvShows extends Component {

  render(){
    var show_array = this.props.printArray;

    return (
      <div>
      <Grid className="ShowGrid">
        {show_array.map((show) => (
          <Col xs={6} md={4} key={show.id} >
          <Thumbnail src={'http://image.tmdb.org/t/p/original' + show.backdrop_path} alt={show.name} className="ShowCol" >
            <h3>{show.name}</h3>
            <p>{show.overview}</p>
          </Thumbnail>
          </Col>
        ))}
        </Grid>
      </div>
    );
  }
}

export default ShowTvShows;
