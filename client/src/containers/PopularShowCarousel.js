import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';


class PopularShowCarousel extends Component {
  render () {
    return (
     <div >
       <Carousel className="Carousel">
         <Carousel.Item>
         <img src="http://image.tmdb.org/t/p/original/6c4weB3UycHwPgzv31Awt7nku9y.jpg" alt="Stranger Things"/>
           <Carousel.Caption>
             <h3>Stranger Things</h3>
             <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
         <img src="http://image.tmdb.org/t/p/original/bzoZjhbpriBT2N5kwgK0weUfVOX.jpg" alt="Breaking Bad" />
          <Carousel.Caption>
             <h3>Breaking Bad</h3>
             <p>Breaking Bad is the story of Walter White, a struggling high school chemistry teacher who is diagnosed with inoperable lung cancer. He turns to a life of crime, producing and selling methamphetamine, teaming with his former student, Jesse Pinkman. </p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
         <img src="http://image.tmdb.org/t/p/original/bvS50jBZXtglmLu72EAt5KgJBrL.jpg" alt="Sherlock" />
          <Carousel.Caption>
             <h3>Sherlock</h3>
             <p>A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
         <img src="http://image.tmdb.org/t/p/original/4hWfYN3wiOZZXC7t6B70BF9iUvk.jpg" alt="The Wire" />
          <Carousel.Caption>
             <h3>The Wire</h3>
             <p>Told from the points of view of both the Baltimore homicide and narcotics detectives and their targets, the series captures a universe in which the national war on drugs has become a permanent, self-sustaining bureaucracy.</p>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
     </div>
   );
  }
}


export default PopularShowCarousel;
