import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useApi } from '../../../Router';
import MainLoadingScreen from '../../../Components/LoadingScreen/MainLoadingScreen.Component';

// Page Committee, qui permet l'affichage des membres de la commission.

export default function Committee() {

  const [allStatus, setAllStatus] = useState([])
  const [allUserStatus, setAllUserStatus] = useState([])
  const [allUsers, setAllUsers] = useState([])

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

  useEffect(() => {
    fetchAllUsers();
    fetchAllStatus();
    fetchAllUserStatus()
  }, []);




  return (
    <div className='pagePattern'>
      <Helmet><title>La Concordia - Commission</title></Helmet>

      <div id='category'>
        <h2>Commission</h2>
        <h3>Effectif actuel</h3>
      </div>

      <div className='committee pagePattern__content'>
        {!allStatus || allStatus.length <= 0 || !allUsers || allUsers.length <= 0 || !allUserStatus || allUserStatus.length <= 0 ? <MainLoadingScreen /> : <>
          {/* Les données "StatusDatas" sont mappées afin d'afficher les labels des status dont le type est "Committee". Pour chacun de ces labels, les membres ayant ce status sont affichés grace à l'utilisation de la fonction ".map" sur les données "UsersDatas". */}
          {allStatus.map((status) => {
            if (status.type === 'Committee') {
              return (
                <div key={status.id}>
                  <h3 className='pagePattern__subheading'>{status.label}</h3>
                  <div className='separator'></div>

                  {allUserStatus.map((userstatus) => {
                    if (userstatus.statusId === status.id) {
                      return (
                        <div key={userstatus.userId}>
                          {allUsers.map((user) => {
                            if (userstatus.userId === user.id) {
                              return (
                                <div key={user.id}>
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
        </>}
      </div>
    </div>
  )
}