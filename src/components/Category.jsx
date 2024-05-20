import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { addCategoryAPI, getCategoryAPI, getVideoAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allApi';
import VideoCard from './VideoCard';


function Category({removeCategoryRespones}) {


  const [allCategory,setAllCategory]= useState([])
  const [categorName,setCategorName]=useState('')
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setCategorName('')
  }
  const handleShow = () => setShow(true);

  const handleAddCategory = async()=>{
    if(categorName){
      const result = await addCategoryAPI({categorName,allVideos:[]})
      handleClose()
      getAllcategories()
    }else{
      alert("please fill the form completely")
    }
  }

  const getAllcategories = async()=>{
    const result = await getCategoryAPI()
    setAllCategory(result.data)
  }
  console.log(allCategory);
  useEffect(()=>{
    getAllcategories()
  },[removeCategoryRespones])

  const handleRemoveCategory = async(cId)=>{
    await removeCategoryAPI(cId)
    getAllcategories()
  }

  const dragOverCategory = (e)=>{
    e.preventDefault()
    console.log("Dragging over category");
  }
  const videoDropped = async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`video Dropped with vId:${videoId} ,inside category id:${categoryId}`);

    //get detial of videoId

    const {data} = await getVideoAPI(videoId)
    console.log(data);
      //get category details where we have add video

  let selectedCategories = allCategory.find(item=>item.id==categoryId)
  console.log(selectedCategories);

  selectedCategories.allVideos.push(data)
  console.log(selectedCategories);
  await updateCategoryAPI(categoryId,selectedCategories)
  getAllcategories()
  }

  const videoDragStart=(e,videoId,categoryId)=>{
      console.log(`Drag Started from category id :${categoryId} with video id :${videoId}`);
      let dataShare ={videoId,categoryId}
      e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
  }



  return (
    <>
    
     <div className='d-flex justify-content-around'> 
      <h3>All Categories</h3>
      <button onClick={handleShow} className='btn btn-danger'> Add New Category <span className='btn rounded-circle fs-5 text-dark' style={{width:'60px',height:'60px'}}>+</span></button>
      </div>

      <div className="container-fluid mt-3">
      {allCategory.length>0? allCategory.map((item,index)=>(
         <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className="border rounded p-3 mb-2">
        <div className='d-flex justify-content-between'> 
         <h5>{item.categorName}</h5>
         <button onClick={()=>handleRemoveCategory(item.id)} className='btn'>
         <i class="fa-solid fa-trash text-danger"></i>
         </button>
         </div>
         <div className='row mt-2'>
          {
            item.allVideos?.length>0 &&
            item.allVideos?.map((video,index)=>(
              <div draggable onDragStart={e=>videoDragStart(e,video.id,item.id)} key={index} className='col-lg-4'><br />
                <VideoCard insideCategory={true} displayData={video}/>
              </div>
            ))
          }
         </div>

         </div>
      ))
     
      :
      <div className='text-danger fw-bolder'>No Categories are added yett!!!</div>
     }
    </div>

      <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category From</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!!!</p>
        
          <FloatingLabel
        controlId="floatingInputCaption"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control value={categorName} onChange={e=>setCategorName(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    
    
    </>
  )
}

export default Category