import React, {Component} from 'react';
import {Grid, Col, Thumbnail,Modal, Button} from 'react-bootstrap';
import ShowPage from './ShowPage';


class ShowTvShows extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
      showModal: true,
      showID: "",
    }
  }



  handleOnClick = (event) => {
    this.setState({ showID: event.target.parentNode.children[1].children[2].innerText});
    this.setState({clicked: true});
    this.setState({ showModal: true });
  }



  hideModal() {
     this.setState({ showModal: false });
     this.setState({clicked: false});
   }

  render(){
    var showArray = this.props.printArray;
    let showShows;

    if (showArray) {
      showShows = (
        <Grid className="ShowGrid">
          {showArray.map((show) => (
            <Col xs={6} md={3} key={show.id} >
            <Thumbnail src={'http://image.tmdb.org/t/p/original' + show.poster_path} alt={show.name} className="ShowCol" onClick={event => {this.handleOnClick(event)}}>
              <h3>{show.name}</h3>
              <p>{show.overview}</p>
              <p>{show.id}</p>

            </Thumbnail>
            </Col>
          ))}
          </Grid>
      )
    } else {
      showShows = ( <p>No Results</p> )
    }
    return (
      <div>
        {showShows}
        {this.state.clicked ? <Modal
          show={this.state.showModal}
          onHide={this.hideModal.bind(this)}
          dialogClassName="custom-modal"
        >
          <ShowPage show={this.state.showID}/>
          <Modal.Footer>
            <Button onClick={this.hideModal.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal> : null}
      </div>
    );
  }
}

export default ShowTvShows;
