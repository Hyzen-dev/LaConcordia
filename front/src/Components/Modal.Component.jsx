import React from 'react'
import { useState } from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#modalElement')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function Modal(props) {
  const { showModal, setShowModal } = props;

  const handleModal = (status) => {
    setShowModal(status)
  }




  return (
    <ReactModal isOpen={showModal} style={customStyles}>
      {props.children}
    </ReactModal>
  )
}
