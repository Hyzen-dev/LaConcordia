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

      <div className='band'>
        {StatusDatas.map((status) => {
          if (status.type === 'Musician') {
            return (
              <div key={status.id}>
                <h3 className='band__category'>{status.label}</h3>

                <div className='band__members'>

                  {UsersDatas.map((user) => {

                    if (user.status.includes(status)) {
                      return (
                        <div key={user.id} className='band__member'>
                          <p>{user.firstName} {user.lastName}</p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )
          }
        })}

        {InstrumentsDatas.map((instrument) => {
          return (
            <div key={instrument.id}>
              <h3 className='band__category'>{instrument.label}</h3>

              <div className='band__separator'></div>

              <div className='band__members'>


                {UsersDatas.map((user) => {

                  if (user.instruments.includes(instrument)) {
                    return (
                      <div key={user.id} className='band__member'>
                        <p>{user.firstName} {user.lastName}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}