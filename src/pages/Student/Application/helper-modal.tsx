import React from 'react';
import './index.css';

function HelperModal({ setOpenModal, handleConfirm }) {
  return (
    <div className='helper-modalBackground'>
      <div className='helper-modalContainer'>
        <div className='helper-titleCloseBtn'>
          <button onClick={() => setOpenModal(false)}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
        <div className='helper-modalTitle'>
          <h1>Please ensure that the details you have submitted are valid as its authenticity will be verified. If you are sure, please click 'Confirm'</h1>
        </div>
        <div className='helper-modalFooter'>
          <button className='btn btn-success' onClick={handleConfirm}>
            Confirm
          </button>
          <button className='btn btn-danger' onClick={() => setOpenModal(false)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelperModal;
