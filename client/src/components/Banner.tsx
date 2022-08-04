import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

import baner1 from '../images/baner1.jpeg';
import baner2 from '../images/baner2.jpeg';
import baner3 from '../images/baner3.jpeg';
import baner4 from '../images/baner4.jpeg';

type Props = {};

function Banner({}: Props) {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={baner1} alt='First slide' />
          <Carousel.Caption>
            <h3>Play Quiz And Win Prize</h3>
            <p>Best of luck for your future.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={baner2} alt='Second slide' />
          <Carousel.Caption>
            <h3>Win Prizes!!</h3>
            <p>Best of luck for your future.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={baner3} alt='Third slide' />
          <Carousel.Caption>
            <h3>Winner Announcement</h3>
            <p>Best of luck for your future.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={baner4} alt='Fourth slide' />
          <Carousel.Caption>
            <h3>A lot of Prizes!!!</h3>
            <p>Best of luck for your future.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Banner;
