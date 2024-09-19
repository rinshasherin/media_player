import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
     <Navbar className="" style={{backgroundColor:'black'}}>
        <Container>
          <Navbar.Brand href="#home" style={{color:'white'}}>
            <i className="fa-brands fa-square-youtube fa-beat-fade fa-2xl" style={{color: "#ffffff",}} />
            {' '}
            MediaPlayer
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header