// Récupérer les utilisateurs avec leurs rôles depuis la BDD

import React from 'react';
import UsersDatas from './../../../data/Users';
import StatusDatas from '../../../data/Status';

export default function Committee() {
  const CommitteeData = StatusDatas.filter
  return (
    <div>
      <div>
        <h2>Commission</h2>
        <h3>Effectif actuel</h3>
      </div>

      <div>
        {StatusDatas.map((status) => {
          if (status.type === 'Committee') {
            return (
              <div key={status.id}>
                <h3>{status.name}</h3>

                {UsersDatas.map((user) => {
                if (user.status === status) {
                  return (
                    <div key={user.id}>
                      <p>{user.firstName} {user.lastName}</p>
                    </div>
                  );
                }
                return null;
              })}

              </div>
            
        )}
          
        })}
      </div>
    </div>
  )
}