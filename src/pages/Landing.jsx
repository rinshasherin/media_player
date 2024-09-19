import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className='container-fluid p-5'>
        <Row>
          <Col className='d-flex flex-column justify-content-center'>
            <h1>MediaPlayer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eaque fuga pariatur? Voluptatibus, ut esse id consequatur voluptate
               suscipit eum et accusantium? Deserunt voluptatum aspernatur alias rem, provident consectetur odit!
            </p>
            <div className="d-grid">
              <Link className='btn' to={'/db'} style={{color:'white', backgroundColor:'black'}}>Let's go</Link>
            </div>
          </Col>
          <Col>
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-youtube-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-social-media-pack-logos-icons-8967168.png?f=webp" 
                 alt="landing" className="img-fluid m-5 p-5" width={'480px'}/>
          </Col>
        </Row>

      </div>

      <div className="container-fluid p-5">
        <h1 className="text-center mb-5">Features</h1>
        <div className='row justify-content-around'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/285803/screenshots/1068612/dribbble_shot.gif" />
            <Card.Body>
              <Card.Title>Simple Upload</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://media4.giphy.com/media/edLay6gp1Sw79e0L1W/giphy.gif?cid=6c09b952ohvxe6lezrcgdbpvkuea1wrph7ztt1ejly8ybdyh&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" />
            <Card.Body>
              <Card.Title>Watch Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://gifyard.com/wp-content/uploads/2023/04/Tumblr.gif" />
            <Card.Body>
              <Card.Title>Categorize Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container-fluid p-5">
        <Row>
          <Col md={8}>
            <h3>Simple And Faster</h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse officia commodi velit recusandae nihil 
               accusamus. Ipsa, sapiente dolores quis reiciendis nesciunt a quos ut ipsam totam. Lorem ipsum dolor sit amet, consectetur adipisicing 
               elit. Porro excepturi, veniam labore praesentium aut sequi doloribus alias saepe consectetur suscipit, similique ipsum dicta eum 
               blanditiis minus. Non alias ullam similique distinctio deserunt, modi quo.
            </p>
          </Col>
          <Col md={4}>
            <iframe width="100%" height="230px" src="https://www.youtube.com/embed/hHuG7FIKgtc?si=hIhb_3GwcvYSqVgt" title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>          
          </Col>
        </Row>

      </div>
    </>
  )
}

export default Landing