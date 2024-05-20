import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
Card

function Landingpage() {

  const navigate = useNavigate()
  const handleNavgate=()=>{
    navigate('/home')
  }
  return (
 <>
      <div className='container'>
        <div className="header row aling-items-center m-5">
          <div className='col-lg-5'> 
          <h3 style={{height:'100px'}}>Welcome to <span className='text-info'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player app . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quod aliquam odio expedita. Veniam voluptatem exercitationem voluptatum! Amet cumque deserunt possimus optio beatae, enim hic voluptates voluptatem similique assumenda illum.</p>
          <button className='btn btn-danger' onClick={handleNavgate}>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img src="https://i.pinimg.com/originals/c6/c1/1d/c6c11d8ba0b9f26caf0a6a8ee3a3e78e.gif" alt="landing image" />
          </div>
        </div>
        <div className="features">
          <h3 className='text-center'>Features</h3>
          <div className='row mt-5'>
            <div className="col-lg-4">
            <Card>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif" style={{height:"300px"}}/>
      <Card.Body>
        <Card.Title>managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card>
      <Card.Img variant="top" src="https://image-processor-storage.s3.us-west-2.amazonaws.com/uploads/5af9a34659d63e539c0c74476e7eec90/3d-seamless-animation-of-brunette-woman-with-a-laptop-sitting-on-a-sofa-late-at-night-on-blue-background.gif" style={{height:"300px"}}/>
      <Card.Body>
        <Card.Title>Categorize Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card>
      <Card.Img variant="top" src="https://gifdb.com/images/high/rick-roll-ashley-dance-h2d7puir23see4lq.gif" style={{height:"300px"}} />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
            </div>

          </div>
        </div>
        <div className="video border p-5 mt-5 rounded mb-5 row">
          <div className="col-lg-6">
            <h3>simple , fast and powerful</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem harum quidem facilis error quod hic expedita totam laborum cumque voluptatum modi quae veniam autem perspiciatis, voluptate cupiditate, tempore incidunt libero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto assumenda alias ipsum voluptate corporis dolore, optio reiciendis ea ad quaerat eum impedit quia dignissimos expedita nesciunt omnis. Dolorem, assumenda consequatur!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iure reprehenderit numquam eveniet vero eligendi inventore corporis rerum harum culpa ea a, debitis eum soluta facilis exercitationem voluptates quae accusantium?</p>
          </div>

          <div className="col-lg-6">
          <iframe width="500" height="470" src="https://www.youtube.com/embed/HkvVaj_28C8" title="Armadham | Aavesham | Jithu Madhavan |Fahadh Faasil | Sushin Shyam | Vinayak| Nazriya| Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
 </>
  )
}

export default Landingpage