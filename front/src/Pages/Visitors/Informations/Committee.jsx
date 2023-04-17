// Récupérer les utilisateurs avec leurs rôles depuis la BDD

import React from 'react';
import UsersDatas from './../../../data/Users';
import StatusDatas from '../../../data/Status';

export default function Committee() {
  return (
    <div>
      <div id='category'>
        <h2>Commission</h2>
        <h3>Effectif actuel</h3>
      </div>

      <div className='committee pagePattern'>
        {/* Affichage des status de type 'Committee' */}
        {StatusDatas.map((status) => {

          if (status.type === 'Committee') {
            return (
              <div key={status.id}>
                <h3 className='pagePattern__subheading'>{status.label}</h3>
                <div className='separator'></div>

                {UsersDatas.map((user) => {

                  // Pour chaques utilisateurs, affichage de son nom et prénom si son status correspond au status affiché en h3
                  if (user.status.includes(status)) {
                    return (
                      <div key={user.id}>
                        <p>{user.firstName} {user.lastName}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}