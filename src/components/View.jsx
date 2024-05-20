import React, { useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, getSingleCategoryAPI, updateCategoryAPI } from '../services/allApi'


function View({uploadVideoRespones,setRemoveCategoryRespones}) {


  const [allVideose,SetAllVideose] = useState([])
  const [deleteVideoRspones,setDeleteVideoRspones] = useState('')
const getAllVideos = async()=>{
  const result = await getAllVideosAPI()
  // console.log(result);
  if(result?.status==200){
    SetAllVideose(result?.data);
  }
}

  useEffect(()=>{
    getAllVideos()

  },[uploadVideoRespones,deleteVideoRspones])

  // console.log(allVideose);

  const dargOverView =(e)=>{
    e.preventDefault()
  }

  const handleCategoryVideo = async (e)=>{

   
    const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
    console.log(`Remove Video Id :${videoId} Form Category Id:${categoryId}`);
    //get A category
    const {data} = await getSingleCategoryAPI(categoryId)
  const updateVideoList = data.allVideos.filter(item=>item.id!=videoId)
  console.log(updateVideoList);
  const {id,categorName} = data
  const result = await updateCategoryAPI(categoryId,{id,categorName,allVideos:updateVideoList})
  setRemoveCategoryRespones(result.data)
  }
 
  return (
    <>
    <Row droppable="true" onDragOver={e=>dargOverView(e)} onDrop={e=>handleCategoryVideo(e)} >
     { allVideose?.length>0?allVideose?.map((video,index)=>(
        <Col key={index} className='mb-4 p-5' sm={12} md={6} lg={4} >
        <VideoCard displayData={video} setDeleteVideoRspones={setDeleteVideoRspones} / >
        </Col>
     )) 
      :
      <div className='text-danger fw-bolder'>No Videos Are Uploaded yet!!!</div>
      }
    </Row>
    </>
  )
}

export default View