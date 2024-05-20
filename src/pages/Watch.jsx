import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allApi'


function Watch() {

  const [history,setHistory]=useState([])
  const getAllhistor = async()=>{
    const result = await getHistoryAPI()
    if(result.status>=200 && result.status<300){
      setHistory(result.data)
    }
  }
  useEffect(()=>{
    getAllhistor()
  },[])

  const deleteHistory = async(vId)=>{
    await removeHistoryAPI(vId)
    getAllhistor()
  }
  return (
    <div className='container mt-5 mb-5'>
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}> Back to<i class="fa-solid fa-home ms-3 text-info"></i></Link>

      </div>
      <table className='table mt-5 mb-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time stamp</th>
            <th><i class="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>
         { history?.length>0? history?.map((video,index)=>(
          <tr key={index}>
          <td>{index+1}</td>
          <td>{video?.caption}</td>
          <td><a href={video?.youtubeLink} target='_blank'>{video?.youtubeLink}</a></td>
          <td>{video?.timeStamp}</td>
          <td onClick={()=>deleteHistory(video.id)}><i class="fa-solid fa-trash text-danger"></i></td>
        </tr>
         )):
         <tr className='text-danger fw-bolder'>Your Watch History is emtpy!!!</tr>
        }
        </tbody>
      </table>
    </div>
  )
}

export default Watch