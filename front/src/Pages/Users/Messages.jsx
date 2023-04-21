import React, { useState } from 'react';
import Modal from '../../Components/Modal/Modal.Component';
import ContactForm from '../../Components/Forms/ContactForm.Component';


export default function Messages() {

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.password.value)
    setShowModal(false);
  }

  return (
    <div className='usersPage'>
      <div id='category'>
        <h2>Mes messages</h2>
      </div>
      <div className='pagePattern tablePagePattern'>
        <table className='table'>
          <thead>
            <tr>
              <th className='table__header'>Date</th>
              <th className='table__header'>Sujet</th>
              <th className='table__header buttonTh'>Message</th>
            </tr>
          </thead>

          <tbody>
            <tr className='table__rows'>
              <td>01.01.2023</td>
              <td>Lorem [...]</td>
              <td className='table__buttonTd'>
                <button className='button' onClick={() => setShowModal(true)}><i className="fa-solid fa-eye"></i></button>
                <button className='button'><i className="fa-solid fa-xmark"></i></button>

                <Modal showModal={showModal} setShowModal={setShowModal}>
                  <div className='modal'>
                    <div className='modal__header'>
                      <h2 className='modal__header__title'>Message du $Date</h2>
                      <button className='modal__header__button' onClick={() => setShowModal(false)}><i className="fa-solid fa-square-xmark"></i></button>
                    </div>
                    <div className='separator'></div>
                    <form onSubmit={handleSubmit} action="#" className='modal__form'>
                      <ContactForm />
                    </form>
                  </div>
                </Modal>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}