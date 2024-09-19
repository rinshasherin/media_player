import React,{useEffect,useState} from 'react'
import { getHistoryApi,deleteHistoryApi } from '../services/allApi'

function History() {

  const [hlist,setHlist]=useState([])
  const [resp,setResp]=useState({})

  useEffect(()=>{
    getData()
  },[resp])

  const getData=async()=>{
    const result=await getHistoryApi()
    if(result.status==200){
      setHlist(result.data)
      console.log(result.data)
    }
  }

  const deleteHist=async(id)=>{
    const dlt=await deleteHistoryApi(id)
    if(dlt.status==200){
      setResp(dlt)
    }
  }

  return (
    <>


      <h2>Watch History</h2>

      
      {
        hlist?.length > 0 ?
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Video URL</th>
              <th>Date and Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
  
          {
            hlist?.map(item=>(
              <tr>
                <td>{item.vid}</td>
                <td>{item.title}</td>
                <td>{item.url}</td>
                <td>{item.date}</td>
                <td>
                  <button className='btn'  onClick={()=>{deleteHist(item.id)}}>
                    <i class="fa-solid fa-trash fa-lg" style={{color:'white'}} />
                  </button>
                  </td>
            </tr>
            ))
          }
        </tbody>
        </table>
  
        :

        <h3>No History!!</h3>
        
      }
      

        
          
    </>
  )
}

export default History