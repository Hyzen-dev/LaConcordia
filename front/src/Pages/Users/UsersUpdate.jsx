import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useApi } from '../../Router';
import { Link } from 'react-router-dom';
import LoadingScreen from '../../Components/LoadingScreen.Component';

export default function UsersUpdate() {

  const [allUsers, setAllUsers] = useState([])

  const fetchAllUsers = async () => {
    const response = await useApi.user.GetAll();
    return setAllUsers(response.data);
  }

  useEffect(() => {
    fetchAllUsers()
  }, []);

  const handleDelete = async (id, state) => {
    const response = await useApi.user.ArchiveUser({ id: id, state: state });
    if (response.status === 200) {
      console.log(response)
      fetchAllUsers();
    } else {
      console.log(response);
    }
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

  const [showArchivedUsers, setShowArchivedUsers] = useState(false);

  const handleArchiveUsers = () => {
    setShowArchivedUsers(!showArchivedUsers);
  }

  return (
    <div>
      <Helmet><title>La Concordia - Gestion des utilisteurs</title></Helmet>

      <div className='usersPage'>
        {allUsers.length === 0 ? <LoadingScreen /> : <>
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
                  if (!user.deletionDate) {
                    return (
                      <tr key={user.id} className='table__rows'>
                        <td>{user.lastName}</td>
                        <td>{user.firstName}</td>
                        <td className='table__buttonTd'>
                          <Link to={`/espace-membre/utilisateurs/${user.id}`} className='link button'>
                            <button className='button'>
                              <i className="fa-solid fa-pencil"></i>
                            </button>
                          </Link>

                          <button className='button button--red' onClick={() => handleDelete(user.id, true)} ><i className="fa-solid fa-xmark"></i></button>

                          {/* {user.deletionDate ?
                            <button className='button button--blue' onClick={() => handleDelete(user.id, false)}><i className="fa-solid fa-arrows-rotate"></i></button>
                            :
                            null
                          } */}
                        </td>
                      </tr>
                    );
                  } else {
                    return null;
                  }
                })}
              </tbody>
            </table>

            <button className='button archiveMessagesButton' onClick={handleArchiveUsers}>Utilisateurs archivés</button>

            {showArchivedUsers ?
              allUsers.filter((user) => user.deletionDate).length <= 0 ?
                <p className='table__noData'>Aucun message archivé</p>
                :
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
                      if (user.deletionDate) {
                        return (
                          <tr key={user.id} className='table__rows'>
                            <td>{user.lastName}</td>
                            <td>{user.firstName}</td>
                            <td className='table__buttonTd'>
                              <Link to={`/espace-membre/utilisateurs/${user.id}`} className='link button'>
                                <button className='button'>
                                  <i className="fa-solid fa-pencil"></i>
                                </button>
                              </Link>

                              <button className='button button--blue' onClick={() => handleDelete(user.id, false)}><i className="fa-solid fa-arrows-rotate"></i></button>
                            </td>
                          </tr>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </tbody>
                </table>
              : null}
          </div>
        </>}
      </div>
    </div>
  )
}