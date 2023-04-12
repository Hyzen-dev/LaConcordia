import React from 'react'
import UsersData from './../../data/Users';
import RolesData from './../../data/Roles';


export default function UsersUpdate() {
  return (
    <div id='usersContent'>
      <h2>Gestion des utilisateurs</h2>




      <table>
        <thead>
          <tr>
            <th>NOM</th>
            <th>Prénom</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>

          {UsersData.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.lastName}</td>
                <td>{user.firstName}</td>
                <td><select name="roles">
                  <option value="role">{user.role.name}</option>

                  {RolesData.map((role) => {
                    if (role.name != user.role.name) {
                      return (
                        <option value="autre" key={role.id}>{role.name}</option>
                      )
                    }
                  return null
                  })}

                </select></td>
              </tr>
            )
          })}

        </tbody>
      </table>

    </div>
  )
}
