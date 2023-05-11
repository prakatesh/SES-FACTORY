import React from 'react';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';

function Video() {
  return (
    <Container>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=xNXIWzwfKtY'
        width='100%'
        height='40vh'
      />
    </Container>
  );
}

export default Video;
