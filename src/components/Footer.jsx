import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
  <>
  
  <hr />
        <div style={{height:"300px"}} className='container mt-5 w-100'>
            <div className="footer-content d-flex justify-content-between">
                <div style={{width:'400px'}} className='media'>
                    <h5 className='d-flex'style={{height:'50px'}}> <i style={{height:'30px'}} class="fa-solid fa-music mt-2 me-3 fa-beat"></i>
                    Media Player</h5>
                    <p style={{textAlign:"justify"}}> Designed and bulit with all the love in the world by the Bootstrap team withe the help of our contributors.</p>
                    <span>Code Licensed MIT, docs CC BY 3.0</span>
                    <span>Currently V5.3.2.</span>
                </div>
                <div className="links d-flex flex-column">
                    <h5 className='d-flex'> Links</h5>
                    <Link to={'/'} style={{textDecoration:"none",color:"white"}}>Landing Page</Link>
                    <Link to={'home'} style={{textDecoration:"none",color:"white"}}>Home</Link>
                    <Link to={'watch'} style={{textDecoration:"none",color:"white"}}>Watch History</Link>
                </div>
                <div className="guides d-flex flex-column"> 
                    <h5>Guides</h5>
                    <a href="https://react.dev/" target='_blank'  style={{textDecoration:"none",color:"white"}}>React Js</a>
                    <a href="https://www.w3schools.com/react/react_router.asp"  style={{textDecoration:"none",color:"white"}}>React Routing</a>
                    <a href="https://react-bootstrap.netlify.app/"  style={{textDecoration:"none",color:"white"}}>React Bootstrap</a>
                 </div>
                <div className="contact">
                    <h5>Contact Us</h5>
                  <div className='d-flex'>
                        <input type="text" className='form-control me-1 ' placeholder='Email Id Please'/>
                        <button className='btn btn-danger'> <i class="fa-solid fa-arrow-right"></i></button>
                  </div>
              
                <div className="icon d-flex justify-content-between mt-3">  
                <a href="https://twitter.com/?lang=en" target='_blank' style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-x-twitter fa-2x "></i></a>
                <a href="https://www.instagram.com/" target='_blank' style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-instagram fa-2x"></i></a>
                <a href="https://in.linkedin.com/" target='_blank' style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-linkedin fa-2x"></i></a>
                <a href="https://www.facebook.com/" target='_blank' style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-facebook fa-2x "></i></a>
                <a href="https://github.com/dashboard" target='_blank' style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-github fa-2x"></i></a>
                </div>
                </div>
            </div>
            <p className='text-center mt-5'> copyrigt &copy; 2024 media player.built with react</p>
        </div>
  </>
 
  )
}

export default Footer