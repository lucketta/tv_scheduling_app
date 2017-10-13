import React, {Component} from 'react';

class DisplayShowButtons extends Component {
  render(){
    return (
      <div className="ButtonGroup">
        <a href="#" className="Button" data-primary="true">Popular Shows</a>
        <a href="#" className="Button" data-primary="true">Top Rated</a>
        <a href="#" className="Button" data-primary="true">On the Air</a>
        <a href="#" className="Button" data-primary="true">Airing Today</a>


      </div>
    );
  }
}

export default DisplayShowButtons;
