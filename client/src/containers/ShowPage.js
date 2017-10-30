import React, {Component} from 'react';
import {Modal, Button, Thumbnail, Glyphicon, ButtonToolbar, Image} from 'react-bootstrap';


class ShowPage extends Component {
  constructor() {
    super();

    this.state = {
      showInfo: [],
    }
  }

  fetchShowDetails() {
    var requestUrl = 'https://api.themoviedb.org/3/tv/' + this.props.show + '?api_key=6c9ca5f9c165a06d30f01771e5b3a8ec&language=en-US';

    return fetch(requestUrl)
        .then(res => {
          return res.json();
        }).then(json => {
        this.setState({showInfo: json});
      }).catch((err)=>{
        console.log(err);
      })
  }
  render(){
    this.fetchShowDetails();
    return (
      <div>
      <Image src={'http://image.tmdb.org/t/p/original' + this.state.showInfo.backdrop_path}/>

      <Modal.Header closeButton>

        <Modal.Title className="modal-title">{this.state.showInfo.name} </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <h4>Summary</h4>
        <p>{this.state.showInfo.overview}</p>
      </Modal.Body>
      </div>

    );
  }
}

export default ShowPage;
