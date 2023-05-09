import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Modal from '../../Components/Modal/Modal.Component';
import UsersData from './../../data/Users';
import { useApi } from '../../Router';


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

  const [allUsers, setAllUsers] = useState([])

  const fetchAllUsers = async () => {
    const response = await useApi.user.GetAll();
    return setAllUsers(response.data);
  }

  useEffect(() => {
    fetchAllUsers()
  }, []);

  const handleDelete = async (id, state) => {
    // const filteredUsers = allUsers.filter((user) => user.id !== id);

    const response = await useApi.user.ArchiveUser({ id: id, state: state });

    if (response.status === 200) {
      console.log(response)
      fetchAllUsers();
    } else {
      console.log(response);
    }

    // setAllUsers(filteredUsers);
  }

  function sortUsers(a, b) {
    if (a.deletionDate === null && b.deletionDate !== null) {
      return -1; // a avant b
    } else if (a.deletionDate !== null && b.deletionDate === null) {
      return 1; // b avant a
    } else {
      return 0; // aucun changement
    }
  }



  return (
    <div>
      <Helmet><title>La Concordia - Gestion des utilisteurs</title></Helmet>

      <div className='usersPage'>
        <div id='category'>
          <h2>Gestion des utilisateurs</h2>
        </div>

        <div className='tablePagePattern'>

          <table className='table'>
            <thead>
              <tr>
                <th className='table__header'>Nom</th>
                <th className='table__header'>Prénom</th>
                <th className='table__buttonHeader'>Profil</th>
              </tr>
            </thead>

            <tbody>
              {allUsers.sort(sortUsers).map((user) => {
                return (
                  <tr key={user.id} className='table__rows'>
                    <td>{user.lastName}</td>
                    <td>{user.firstName}</td>
                    <td className='table__buttonTd'>
                      <button className='button' onClick={() => handleModal(user)}><i className="fa-solid fa-pencil"></i></button>
                      {user.deletionDate ?
                        <button className='button button--blue' onClick={() => handleDelete(user.id, false)}><i className="fa-solid fa-arrows-rotate"></i></button>
                        :
                        <button className='button button--red' onClick={() => handleDelete(user.id, true)} ><i className="fa-solid fa-xmark"></i></button>
                    }
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
    </div>
  )
}