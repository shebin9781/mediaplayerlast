import React from 'react'
import { Navbar , Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     <Navbar className="bg-danger">
        <Container>
         <Link to={'/'} style={{textDecoration:"none"}} >
              <Navbar.Brand className='fw-bolder d-flex aling-items-center' style={{color:"white"}}>
              <i class="fa-solid fa-music mt-2 me-3 fa-beat"></i>{' '}
                Media Player
              </Navbar.Brand>
         </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header