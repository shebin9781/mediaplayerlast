import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import {FloatingLabel} from 'react-bootstrap';
import { uploadVideoAPI } from '../services/allApi';



function Add({setUploadVideoRespones}) {

  
  const [uploadVideo , setUploadVideo]=useState({
    caption:"",imageURL:"",youtubeLink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
  }
    const handleShow = () => setShow(true);

console.log(uploadVideo);

 const youtubeEmbedLink=(link)=>{
    if(link.includes("v=")){
      let videoId=link.split("v=")[1].slice(0,11)
      setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})

    }else{
      setUploadVideo({...uploadVideo,youtubeLink:""})
      alert("input proper youtube link!!!")
    }
    
 }

 const handleUpload= async()=>{
  // store upload video in http://localhost:3000/video

  const {caption,imageURL,youtubeLink}=uploadVideo
  if(caption&& imageURL && youtubeLink){
   const result = await uploadVideoAPI(uploadVideo)
   console.log(result);
    if(result.status>=200&& result.status<300){
      alert(`video'${result.data.caption}' uploaded successfully!!!`)
      setUploadVideoRespones(result.data)
      handleClose()
    }else{
      alert("API Call Failed... Please try after some time !!!!")
    }
    
  }else{
    alert('please fill the form')
  }
 }
  return (
    <>
    <div className="d-flex align-items-center">
        <h5>Upload A Video</h5>
        <button onClick={handleShow}  className='btn bg-secondary ms-2'><i class="fa-solid fa-plus "></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details!!!</p>
      <div className='border rounded border-secondary p-3'>
          <FloatingLabel
          controlId="floatingInputImg"
          label="Video Caption"
          className="mb-3"
        >
          <Form.Control value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInputURL"
          label="Image Url"
          className="mb-3"
        >
          <Form.Control value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="Image Url" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInputYoutube"
          label="Youtube Video Linke"
          className="mb-3"
        >
          <Form.Control value={uploadVideo.youtubeLink} onChange={e=>youtubeEmbedLink(e.target.value)} type="text" placeholder="Youtube Video Linke" />
        </FloatingLabel>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className="btn btn-success">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add


//               https://www.youtube.com/watch?v=nDJ8KgjlzYM

//               https://www.youtube.com/embed/nDJ8KgjlzYM