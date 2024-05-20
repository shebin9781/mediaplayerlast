import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'


function Home() {
   const [removeCategoryRespones,setRemoveCategoryRespones]=useState('')
  const [uploadVideoRespones,setUploadVideoRespones] = useState("")
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
      <Add setUploadVideoRespones={setUploadVideoRespones}/>
      <Link to={'/watch'}>View Histore</Link>
      </div>

      <div className='container-fluid mt-5 mb-5 row ms-5'>
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View uploadVideoRespones={uploadVideoRespones} setRemoveCategoryRespones={setRemoveCategoryRespones} />
        </div>
        <div className="col-lg-6">
          <div>
            <Category removeCategoryRespones={removeCategoryRespones} />
          </div>
        </div>
      </div>

   
    </>
  )
}

export default Home