import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {

  return (
    <Container style={{padding:"0 0 50px 0"}} >
    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
      <video
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius:"25px"
        }}
        
        autoPlay
        muted
        loop
      >
        <source src="https://res.cloudinary.com/dzwyhgoer/video/upload/v1701933786/hashgate/ourwork/media%20production/event%20coverage/4_ydgnfq_lj1zr9.mp4" type="video/mp4" />
   
        Your browser does not support the video tag.
      </video>
    </div>
    </Container>   
 
  );
}

export default Home;
