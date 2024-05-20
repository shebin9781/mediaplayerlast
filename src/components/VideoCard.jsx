import React, { useState } from 'react'
import { Card ,Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allApi';



function VideoCard({displayData,setDeleteVideoRspones,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)
    //get video details
    const {caption,youtubeLink}=displayData
    let timeData =new Date()
    let timeStamp = new Intl.DateTimeFormat("en-US",{
      year:'numeric',month:'2-digit',day:'2-digit',hour:"2-digit",minute:"2-digit",second:"2-digit"
    }).format(timeData)

    await saveHistoryAPI({caption,youtubeLink,timeStamp})
  }
    
  //removing videos
  const deleteVideo = async(vId)=>{
    //Api call
   const result= await removeVideoAPI (vId)
    setDeleteVideoRspones(result.data)
  }

  const dragStarted =(e,vId)=>{
    console.log(`Dragging Started With video id : ${vId}`)
    e.dataTransfer.setData("videoId",vId)
  }




  return (
    <>
     <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} className='shadow ' style={{width:'200px',height:"350px"}}>
      <Card.Img onClick={handleShow} variant="top" height={"200px"} style={{cursor:'pointer'}}  src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <p>{displayData?.caption}</p>
        </Card.Title>
    
       {!insideCategory && <button className="btn" onClick={()=>deleteVideo(displayData?.id)}><i class="fa-solid fa-trash text-danger"></i></button>}
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Capation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400px" src={`${displayData?.youtubeLink}?autoplay=1`} title="Caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard