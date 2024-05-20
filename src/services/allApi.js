
import commonAPI from "./commonApi"
import { SERVER_URL } from "./server_URL"


//add component
export const  uploadVideoAPI = async(video)=>{
   return await commonAPI ("POST",`${SERVER_URL}/video`,video)
}

//get Video api called by view

export const  getAllVideosAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/video`,"")
}
// store watch by videoCard tohttp://localhost:3000/history

export const saveHistoryAPI = async(videoDetails)=>{
    return await commonAPI ("POST",`${SERVER_URL}/history`,videoDetails)
}


//get history to Watch compoenet to http://localhost:3000/history
export const getHistoryAPI = async()=>{
    return await commonAPI ("GET",`${SERVER_URL}/history`,"")
}

//remove history to watch component

export const removeHistoryAPI = async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

//remove video
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/video/${videoId}`,{})
}

// save category to category compoenet

 export const addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
 }

 //get category to category compoenet

 export const getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
 }

 //remove category api
  export const removeCategoryAPI = async(categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})
  }

  // get single video api 

  export const getVideoAPI = async (videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/video/${videoId}`,"")
  }

  // updateCategory api

  export const updateCategoryAPI =async(categoryId,updateCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updateCategoryDetails)
  }

  //get singleCategory Api
  
  export const getSingleCategoryAPI = async (categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
  }