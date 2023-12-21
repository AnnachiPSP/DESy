import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

function ConfirmModal({ setOpenModal, message, destination }) {

  const navigate = useNavigate();

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => {setOpenModal(false)}}><i className="fa-solid fa-circle-xmark"></i></button>
        </div>
        <div className='modalTitle'>
          <h1>{message}</h1>
        </div>
        <div className='modalFooter'>
          <button className='btn btn-success' onClick={() => navigate(`${destination}`)}>Yes</button>
          <button className='btn btn-danger' onClick={() => {setOpenModal(false)}}>No</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal