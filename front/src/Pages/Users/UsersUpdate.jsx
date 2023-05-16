import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useApi } from '../../Router';
import { Link } from 'react-router-dom';
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen.Component';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';


import { Icon } from '@mui/material';

const FilterComponent = ({ filterText, onFilter, onClear }) => {
  return (
    <>
      <input
        id="search"
        type='text'
        placeholder="Filter By Name"
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter} />
      <button type="button" onClick={onClear} className='undoButton'><i className="fa-solid fa-square-xmark"></i></button>
    </>
  )
}

export default function UsersUpdate() {
  const data = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      isArchived: false,
    },
    {
      id: 2,
      firstName: 'Jonathan',
      lastName: 'Smith',
      isArchived: true,
    },
  ]

  const [allUsers, setAllUsers] = useState([])

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);




  const fetchAllUsers = async () => {
    const response = await useApi.user.GetAll();
    return setAllUsers(response.data);
  }

  useEffect(() => {
    fetchAllUsers()
  }, []);

  const navigate = useNavigate();

  


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


  const customStyles = {
    overlay: {
    },
    rows: {
      style: {
        overflow: 'hidden',
      },
    },
    headCells: {
      style: {
        overflow: 'hidden',

      },
    },
    cells: {
      style: {
        overflow: 'hidden',

      },
    },
  }




  const columns = [
    {
      name: 'Nom',
      selector: row => row.lastName,
      sortable: true,
    },
    {
      name: 'Prénom',
      selector: row => row.firstName,
      sortable: true,
    },
    {
      name: '?',
      style: {
        width: 10 + 'px',
      },
      cell: row => <div style={{
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50 + '%',
        padding: 8 + 'px',
        width: 8 + 'px',
        height: 8 + 'px',
        backgroundColor: row.isArchived ? 'red' : 'green',
      }}>
        {!row.isArchived ?
          <i style={{ color: 'white', fontSize: 12 + 'px' }} className='fas fa-check'></i>
          :
          <i style={{ color: 'white', fontSize: 12 + 'px' }} className='fas fa-xmark'></i>
        }
      </div>,
      sortable: true,
    }
  ];

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    );
  }, [filterText, resetPaginationToggle]);



  if (!allUsers) {
    return <LoadingScreen />
  }

  const filteredItems = allUsers.filter((item) =>
    (item.firstName && item.lastName) && (item.firstName.toLowerCase().includes(filterText.toLowerCase()) || item.lastName.toLowerCase().includes(filterText.toLowerCase())),
  );
 

  return (
    <div className='tablePage'>
      <Helmet><title>La Concordia - Gestion des utilisteurs</title></Helmet>

      {!allUsers || allUsers.length === 0 ? <LoadingScreen /> : <>
        <div id='category'>
          <h2>Gestion des utilisateurs</h2>
        </div>

        <DataTable
          columns={columns}
          data={filteredItems}
          highlightOnHover
          pointerOnHover
          onRowClicked={(row) => navigate(`./${row.id}`)}
          // customStyles={customStyles}
          overflowX='hidden'
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
        />

        {/* <div className='tablePage__content'>
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
        </div> */}
      </>}
    </div>
  )
}