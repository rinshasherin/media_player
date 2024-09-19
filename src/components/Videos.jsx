import React,{useEffect,useState} from 'react'
import VideoCard from './VideoCard'
import { getVideosApi } from '../services/allApi'

function Videos({result}) {

  const [data,setData]=useState([])

  const [resp,setResp]=useState({})

  useEffect(()=>{
    getData()
  },[result,resp])
  
  const getData=async()=>{
    const result=await getVideosApi()
    console.log(result)

    if(result.status==200){
      setData(result.data)
    }   
  }

  return (
    <>
      <div className="container-fluid border border-2 border-dark shadow-lg p-1">
          {
            data?.length > 0 ?
            <div className='row p-1 justify-content-around'>
              {data?.map(item=>(
                  <VideoCard video={item} res={setResp} />
                ))}
            </div>

            :

            <h4 className="text-danger text-center">No Videos Available!!!</h4>
          }
      </div>
    
    </>
  )
}

export default Videos