import React from 'react'
import UsersData from './../../data/Users';
import RolesData from './../../data/Roles';


export default function UsersUpdate() {
  return (
    <div >
      <div id='category'>
        <h2>Gestion des utilisateurs</h2>
      </div>

      <div className='usersUpdate pagePattern'>

        <table className='usersUpdateTable'>
          <thead>
            <tr>
              <th className='usersUpdateTable__header'>NOM</th>
              <th className='usersUpdateTable__header'>Prénom</th>
              <th className='usersUpdateTable__header'>Profil</th>
            </tr>
          </thead>

          <tbody>
            {UsersData.map((user) => {
              return (
                <tr key={user.id} className='usersUpdateTable__rows'>
                  <td>{user.lastName}</td>
                  <td>{user.firstName}</td>
                  <td>
                    <div className='usersUpdateTable__profilColumn'>
                    <button className='button'>Modifier</button>
                    <button className='button'>Archiver</button>
                    </div>
                  </td>
                  
                  {/* <td><select name="roles">
                    <option value="role">{user.role.label}</option> */}

                    {/* {RolesData.map((role) => {
                      if (role.label != user.role.label) {
                        return (
                          <option value="autre" key={role.id}>{role.label}</option>
                        )
                      }
                      return null
                    })} */}
                  {/* </select></td> */}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
