import React from 'react'
import { useState } from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#modalElement')

const customStyles = {
  content: {
    border: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  }
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
