import React, { useState,useEffect } from 'react'
import { getCategoryApi,deleteCategoryApi,addVideoToCategory } from '../services/allApi'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'


function CategorySet({cat}) {

    const [clist,setClist] = useState([])
    const [resp,setResp] = useState({})

    useEffect(()=>{
        getData()
    },[cat,resp])

    const getData=async()=>{
        const result=await getCategoryApi()

        if(result.status==200){
            setClist(result.data)
            console.log(result.data)
        }
    }

    const deleteCat=async(id)=>{
        const result=await deleteCategoryApi(id)
        if(result.status==200){
            setResp(result)
        }
    }

    const handleDragOver=(e)=>{
        e.preventDefault()
        console.log("Drag Over")
    }

    const handleDrop=async(e,cat)=>{
        console.log("Dropped!!")
        const video=JSON.parse(e.dataTransfer.getData('video'))
        console.log(video)
        cat.videos.push(video)
        const result=await addVideoToCategory(cat,cat.id)
        if(result.status==200){
            toast.success("Video Added To Category...")
            getData()
        }
        else{
            toast.error("Failed!!")
        }
    }

   

  return (
    <>
        <div className=" border border-2 border-dark p-2 mt-2">
            {
                clist?.length > 0 ?
                <div>
                    {
                        clist?.map(item=>(
                            <div className="border border-2 w-100 p-2 shadow mb-3" onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleDrop(e,item)}>
                                <div className="d-flex justify-content-between">
                                    <h5>{item.category}</h5>
                                    <button className="btn" onClick={()=>{deleteCat(item.id)}}>
                                        <i className="fa-solid fa-trash fa-xl" style={{color:'black'}} />
                                    </button>
                                </div>

                                <div className="p-1 border">
                                    {
                                        item.videos.length > 0 &&
                                        item.videos.map(item=>(
                                            <VideoCard video={item} cond={true}/>
                                        ))
                                    }

                                </div>

                            </div>
                        ))
                    }
                </div>

                :

                <h5 className="text-danger text-center">No Categories</h5>
            }

        </div>
    
    </>
  )
}

export default CategorySet