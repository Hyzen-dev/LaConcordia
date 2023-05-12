import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import StatusDatas from '../../../data/Status';
import UsersDatas from './../../../data/Users';
import UserStatus from '../../../data/User-Status';
import InstrumentsDatas from '../../../data/Instruments';
import UserInstrument from './../../../data/User-Instrument';
import { useApi } from '../../../Router';
import MainLoadingScreen from '../../../Components/LoadingScreen/MainLoadingScreen.Component';

// Page Band, qui permet l'affichage des membres de l'harmonie et de la clique.

export default function Band() {

  const [allStatus, setAllStatus] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [allUserStatus, setAllUserStatus] = useState([])
  const [allInstruments, setAllInstruments] = useState([])
  const [allUserInstruments, setAllUserInstruments] = useState([])



  const fetchAllUsers = async () => {
    const response = await useApi.user.GetBase();
    return setAllUsers(response.data);
  }

  const fetchAllStatus = async () => {
    const response = await useApi.status.GetAll();
    return setAllStatus(response.data);
  }

  const fetchAllUserStatus = async () => {
    const response = await useApi.userStatus.GetAll();
    return setAllUserStatus(response.data);
  }

  const fetchAllInstruments = async () => {
    const response = await useApi.instruments.GetAll();
    return setAllInstruments(response.data);
  }

  const fetchAllUserInstruments = async () => {
    const response = await useApi.userInstruments.GetAll();
    return setAllUserInstruments(response.data);
  }



  useEffect(() => {
    fetchAllUsers();
    fetchAllStatus();
    fetchAllUserStatus();
    fetchAllInstruments();
    fetchAllUserInstruments();
  }, []);


  return (
    <div className='pagePattern'>
      <Helmet><title>La Concordia - Harmonie & Clique</title></Helmet>

      <div id='category'>
        <h2>Harmonie & Clique</h2>
        <h3>Effectif actuel</h3>
      </div>

      <div className='bandPage pagePatter__content'>
        {!allStatus || allStatus.length <= 0 || !allUsers || allUsers.length <= 0 || !allUserStatus || allUserStatus.length <= 0 ? <MainLoadingScreen /> : <>
          <div className='harmonie'>
            {allStatus.map((status) => {
              if (status.type === 'DirectionHarmonie') {
                return (
                  <div key={status.id}>
                    <h3 className='bandCategory'>{status.label}</h3>
                    <div className='separator'></div>
                    {allUserStatus.map((userstatus) => {
                      if (userstatus.statusId === status.id) {
                        return (
                          <div key={userstatus.userId}>
                            {allUsers.map((user) => {
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


            {allStatus.map((status) => {
              if (status.type === 'MusicienHarmonie') {
                return (
                  <div key={status.id}>
                    {allInstruments.map((instrument) => {
                      if (instrument.statusId === status.id) {
                        return (
                          <div key={instrument.id} className='bandCategory'>
                            <h3>{instrument.label}</h3>
                            <div className='separator'></div>
                            {allUserInstruments.map((userinstrument) => {
                              if (instrument.id === userinstrument.instrumentId) {
                                return (
                                  <>
                                    {allUsers.map((user) => {
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
            {allStatus.map((status) => {
              if (status.type === 'DirectionClique') {
                return (
                  <div key={status.id} className='clique__content'>
                    <h3 className='bandCategory'>{status.label}</h3>
                    <div className='separator'></div>
                    {allUserStatus.map((userstatus) => {
                      if (userstatus.statusId === status.id) {
                        return (
                          <div key={userstatus.userId}>
                            {allUsers.map((user) => {
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


            {allStatus.map((status) => {
              if (status.type === 'MusicienClique') {
                return (
                  <div key={status.id}>
                    {allInstruments.map((instrument) => {
                      if (instrument.statusId === status.id) {
                        return (
                          <div key={instrument.id} className='clique__content'>
                            <h3 className='bandCategory' >{instrument.label}</h3>
                            <div className='separator'></div>
                            {allUserInstruments.map((userinstrument) => {
                              if (instrument.id === userinstrument.instrumentId) {
                                return (
                                  <>
                                    {allUsers.map((user) => {
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
        </>
        }
      </div>
    </div>
  )
}