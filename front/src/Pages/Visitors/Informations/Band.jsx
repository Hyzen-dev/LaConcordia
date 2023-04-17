// Récupération des utilisateurs avec leurs rôles depuis la base de données

import React from 'react';
import UsersDatas from './../../../data/Users';
import InstrumentsDatas from '../../../data/Instruments';
import StatusDatas from '../../../data/Status';


export default function Band() {
  return (
    <div>
      <div id='category'>
        <h2>Harmonie & Clique</h2>
        <h3>Effectif actuel</h3>
      </div>

      <div className='pagePattern'>
        {StatusDatas.map((status) => {
          if (status.type === 'Musician') {
            return (
              <div key={status.id}>
                <h3 className='bandCategory'>{status.label}</h3>

                <div className='separator'></div>


                {UsersDatas.map((user) => {

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

        {InstrumentsDatas.map((instrument) => {
          return (
            <div key={instrument.id}>
              <h3 className='bandCategory pagePattern__subheading'>{instrument.label}</h3>
              <div className='separator'></div>

              {UsersDatas.map((user) => {

                if (user.instruments.includes(instrument)) {
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
        })}
      </div>
    </div>
  )
}