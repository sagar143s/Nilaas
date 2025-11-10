import React from 'react';
import { Container } from 'react-bootstrap';

const Video = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <video autoPlay controls style={{ maxWidth: '1500px', width: '100%', height: 'auto',borderRadius:"25px" }}>
        <source src="https://res.cloudinary.com/dzwyhgoer/video/upload/v1701933786/hashgate/ourwork/media%20production/event%20coverage/4_ydgnfq_lj1zr9.mp4" type="video/mp4" />
      </video>
    </Container>
  );
};

export default Video;
