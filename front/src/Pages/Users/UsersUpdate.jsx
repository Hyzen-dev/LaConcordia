import React, { useState } from 'react';
import UsersData from './../../data/Users';
import Modal from '../../Components/Modal/Modal.Component';


export default function UsersUpdate() {

  const [showModal, setShowModal] = useState(false);

  const [selectedUser, setSelectedUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  }

  const handleModal = (data) => {
    setSelectedUser(data);
    setShowModal(true);
  }

  return (
    <div className='usersPage'>
      <div id='category'>
        <h2>Gestion des utilisateurs</h2>
      </div>

      <div className='tablePagePattern'>

        <table className='table'>
          <thead>
            <tr>
              <th className='table__header'>NOM</th>
              <th className='table__header'>Prénom</th>
              <th className='table__buttonHeader'>Profil</th>
            </tr>
          </thead>

          <tbody>
            {UsersData.map((user) => {
              return (
                <tr key={user.id} className='table__rows'>
                  <td>{user.lastName}</td>
                  <td>{user.firstName}</td>
                  <td className='table__buttonTd'>
                    <button className='button' onClick={() => handleModal(user)}><i class="fa-solid fa-pencil"></i></button>
                    <button className='button'><i className="fa-solid fa-xmark"></i></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <div className='modal'>
            <div className='modal__header'>
              <h2 className='modal__header__title'>Modifier le profil de {selectedUser.firstName} {selectedUser.lastName}</h2>
              <button className='modal__header__button' onClick={() => setShowModal(false)}><i className="fa-solid fa-square-xmark"></i></button>
            </div>
            <div className='separator'></div>

            <form onSubmit={handleSubmit} action="#" className='modal__form'>

            </form>
          </div>
        </Modal>
      </div>
    </div>
  )
}