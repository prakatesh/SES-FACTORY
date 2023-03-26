import React from 'react';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';

function Video() {
  return (
    <Container>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=xNXIWzwfKtY'
        width='80%'
        height='30vh'
      />
    </Container>
  );
}

export default Video;
