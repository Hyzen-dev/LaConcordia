import React from 'react';
import { Helmet } from 'react-helmet';
import InstrumentsDatas from '../../../data/Instruments';
import StatusDatas from '../../../data/Status';
import UsersDatas from './../../../data/Users';
import UserStatus from '../../../data/User-Status';
import UserInstrument from './../../../data/User-Instrument';

// Page Band, qui permet l'affichage des membres de l'harmonie et de la clique.

export default function Band() {
  return (
    <div>
      <Helmet><title>La Concordia - Harmonie & Clique</title></Helmet>

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
                  {UserStatus.map((userstatus) => {
                    if (userstatus.statusId === status.id) {
                      return (
                        <div key={userstatus.userId}>
                          {UsersDatas.map((user) => {
                            if (userstatus.userId === user.id) {
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


          {StatusDatas.map((status) => {
            if (status.type === 'MusicienHarmonie') {
              return (
                <div key={status.id}>
                  {InstrumentsDatas.map((instrument) => {
                    if (instrument.statusId === status.id) {
                      return (
                        <div key={instrument.id} className='bandCategory'>
                          <h3>{instrument.label}</h3>
                          <div className='separator'></div>
                          {UserInstrument.map((userinstrument) => {
                            if (instrument.id === userinstrument.instrumentId) {
                              return (
                                <>
                                  {UsersDatas.map((user) => {
                                    if (user.id === userinstrument.userId) {
                                      return (
                                        <div className='bandMembers'>
                                          <p>{user.firstName}</p>
                                        </div>
                                      )
                                    }
                                    return null
                                  })}
                                </>
                              )
                            }
                            return null
                          })}
                        </div>
                      )
                    }
                    return null
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
                  {UserStatus.map((userstatus) => {
                    if (userstatus.statusId === status.id) {
                      return (
                        <div key={userstatus.userId}>
                          {UsersDatas.map((user) => {
                            if (userstatus.userId === user.id) {
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


          {StatusDatas.map((status) => {
            if (status.type === 'MusicienClique') {
              return (
                <div key={status.id}>
                  {InstrumentsDatas.map((instrument) => {
                    if (instrument.statusId === status.id) {
                      return (
                        <div key={instrument.id} className='clique__content'>
                          <h3 className='bandCategory' >{instrument.label}</h3>
                          <div className='separator'></div>
                          {UserInstrument.map((userinstrument) => {
                            if (instrument.id === userinstrument.instrumentId) {
                              return (
                                <>
                                  {UsersDatas.map((user) => {
                                    if (user.id === userinstrument.userId) {
                                      return (
                                        <div className='bandMembers'>
                                          <p>{user.firstName}</p>
                                        </div>
                                      )
                                    }
                                    return null
                                  })}
                                </>
                              )
                            }
                            return null
                          })}
                        </div>
                      )
                    }
                    return null
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