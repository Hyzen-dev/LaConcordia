// Récupérer les utilisateurs avec leurs rôles depuis la BDD

import React from 'react';
import CommitteeDatas from './../../../data/Committee';
import FunctionsDatas from './../../../data/Functions';

export default function Committee() {

  return (
    <div>
      <div>
        <h2>Commission</h2>
        <h3>Effectif actuel</h3>
      </div>

      <div>
        {FunctionsDatas.map((type) => {
          return (
            <div key={type.id}>
              <h3>{type.name}</h3>

              {CommitteeDatas.map((member) => {
                if (member.function === type.name) {
                  return (
                    <div key={member.id}>
                      <p>{member.firstName} {member.lastName}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}