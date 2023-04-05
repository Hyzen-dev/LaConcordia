// Récupérer les utilisateurs avec leurs rôles depuis la BDD

import React from 'react';
import CommitteeDatas from './../../../data/Committee';
import FunctionsDatas from './../../../data/Functions';

export default function Committee() {

  const members = CommitteeDatas;
  const functions = FunctionsDatas;

  return (
    <div>

      { functions.map((type) => {
        return (
          <div key={type.id}>
            <h4>{type.name}</h4>

            { members.map((member)=> {
              if (member.function.name === type.name) {
                return (
                <div key={member.id}>
                  <p>{member.firstName}</p>
                  <p>{member.lastName}</p>
                </div>
                );
              }
            })}
          </div>
        )
      })
    }
    </div>
  )
}