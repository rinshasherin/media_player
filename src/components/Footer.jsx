import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'

function Footer() {
  return (
    <>
    <div className='container-fluid p-5 mt-5' style={{backgroundColor:'black'}}>

      <Row>
        <Col>
          <h3 style={{color:'white'}}>MediaPlayer 2024</h3>
          <p style={{textAlign:'justify',color:'white'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum nemo magnam atque fugiat. Expedita nemo voluptatem 
             blanditiis ad quisquam, asperiores excepturi dolor saepe laborum a nesciunt consectetur aliquid illo. Lorem ipsum, dolor sit amet 
             consectetur adipisicing elit.
          </p>
        </Col>
        <Col>
          <h3 style={{color:'white'}}>Links</h3>
          <div className="d-flex flex-column">
            <Link to={'/'}  style={{textDecoration:'none', color:'white'}}>Landing</Link>
            <Link to={'/db'} style={{textDecoration:'none', color:'white'}}>DashBoard</Link>
            <Link to={'/hs'} style={{textDecoration:'none', color:'white'}}>Watch History</Link>
          </div>
        </Col>
        <Col>
          <h3 style={{color:'white'}}>Contact Us</h3>
          <p style={{color:'white'}}>mediaplayer2024@gmail.com</p>
          <textarea name="" id="" className='form-control'></textarea>
          <button className='btn btn-dark mt-3'>Send</button>
        </Col>
      </Row>

    </div>
    
    </>
  )
}

export default Footer