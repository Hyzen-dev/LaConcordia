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

      <div className='pagePattern bandPage'>
        <div className='harmonie'>
          {StatusDatas.map((status) => {
            if (status.type === 'DirectionHarmonie') {
              return (
                <div key={status.id}>
                  <h3 className='bandCategory'>{status.label}</h3>
                  <div className='separator'></div>
                  {UsersDatas.map((user) => {
                    if (user.status.includes(status)) {
                      return (
                        <div key={user.id} className='bandMembers'>
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

          {StatusDatas.map((status) => {
            if (status.type === 'MusicienHarmonie') {
              return (
                <div>
                  {InstrumentsDatas.map((instrument) => {
                    if (instrument.status.type === status.type) {
                      return (
                        <div>
                          <h3 className='bandCategory'>{instrument.label}</h3>
                          <div className='separator'></div>
                          {UsersDatas.map((user) => {
                            if (user.instruments.includes(instrument)) {
                              return (
                                <div key={user.id} className='bandMembers'>
                                  <p>{user.firstName} {user.lastName}</p>
                                </div>
                              )
                            }
                            return null;
                          })}
                        </div>
                      )
                    }
                    return null;
                  })}
                </div>
              )
            }
            return null;
          })}
        </div>

        <div className='clique'>
          {StatusDatas.map((status) => {
            if (status.type === 'DirectionClique') {
              return (
                <div key={status.id} className='clique__content'>
                  <h3 className='bandCategory'>{status.label}</h3>
                  <div className='separator'></div>
                  {UsersDatas.map((user) => {
                    if (user.status.includes(status)) {
                      return (
                        <div key={user.id} className='bandMembers'>
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

          {StatusDatas.map((status) => {
            if (status.type === 'MusicienClique') {
              return (
                <div>
                  {InstrumentsDatas.map((instrument) => {
                    if (instrument.status.type === status.type) {
                      return (
                        <div  className='clique__content'>
                          <h3 className='bandCategory'>{instrument.label}</h3>
                          <div className='separator'></div>
                          {UsersDatas.map((user) => {
                            if (user.instruments.includes(instrument)) {
                              return (
                                <div key={user.id} className='bandMembers'>
                                  <p>{user.firstName} {user.lastName}</p>
                                </div>
                              )
                            }
                            return null;
                          })}
                        </div>
                      )
                    }
                    return null;
                  })}
                </div>
              )
            }
            return null;
          })}
        </div>
      </div>
    </div>
  )
}