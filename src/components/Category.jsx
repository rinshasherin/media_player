import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';
import CategorySet from './CategorySet';


function Category() {

  const [show, setShow] = useState(false);
  const [category,setCategory] = useState("")

  const [resp,setResp] = useState({})

  const handleCategory=async()=>{
    // console.log(category)
    if(!category){
      toast.warning('Enter valid input!!')
    }
    else{
      const result=await addCategoryApi({category:category,videos:[]})
      if(result.status==201){
        toast.success("Category added!!")
        setCategory("")
        handleClose()
        setResp(result)
      }
      else{
        toast.error("Adding failed!!")
        console.log(result)
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

    <div className='d-grid'>
      <Button className='btn' onClick={handleShow}>Add Category</Button>
    </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel controlId="floatingitle" label="Category Name" className="mb-3">
              <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>{setCategory(e.target.value)}}/>
            </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategory}>Add</Button>
        </Modal.Footer>
      </Modal>

      <CategorySet cat={resp}/>
    </>
  )
}

export default Category