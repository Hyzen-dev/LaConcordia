import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Modal from '../../Components/Modal/Modal.Component';
import InformationsForm from '../../Components/Forms/InformationsForm.Components';
import SelectComponent from '../../Components/Forms/Select.Component';
import LoadingScreen from '../../Components/LoadingScreen.Component';
// import instruments from '../../data/Instruments';
// import roles from '../../data/Roles';
// import status from '../../data/Status';
// import users from '../../data/Users';
import UserRole from './../../data/User-Role';
import { useApi } from '../../Router';

export default function Profil(props) {
  const { user } = props;
  const [roles, setRoles] = useState(undefined);
  const [status, setStatus] = useState(undefined);
  const [instruments, setInstruments] = useState(undefined);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    const fetchRoles = async () => {
      const response = await useApi.roles.GetAll();
      return setRoles(response.data);
    }

    const fetchStatus = async () => {
      const response = await useApi.status.GetAll();
      return setStatus(response.data);
    }

    const fetchInstruments = async () => {
      const response = await useApi.instruments.GetAll();
      return setInstruments(response.data);
    }

    fetchRoles()
    fetchStatus()
    fetchInstruments()
  }, []);

  // console.log(user)
  // console.log(roles)
  // console.log(status)
  // console.log(instruments)

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  }

  if (!user?.userRoles || user.length <= 0 || !Array.isArray(roles) || !Array.isArray(status) || !Array.isArray(instruments)) {
    return <LoadingScreen />
  }
  
  return (
    <div>
      <Helmet><title>La Concordia - Mon profil</title></Helmet>

      <div className='usersPage'>
        {!user?.userRoles || user.length <= 0 || !roles || !status || !instruments ? <LoadingScreen /> :



          <>
            <div id='category'>
              <h2>Mon Profil</h2>
            </div>

            <div className='profil pagePattern'>

              <div>
                <h3 className='pagePattern__subheading'>Informations personnelles</h3>
                <div className='separator'></div>
                <div className='profil__box'>
                  <InformationsForm user={user} />
                  <p>Si vous souhaitez modifier vos informations, veuillez nous contacter <Link to={'/contact'} className='profil__contact'>ici</Link>.</p>
                  <button onClick={() => setShowModal(true)} className='button'>Modifier mon mot de passe</button>
                </div>


                <Modal showModal={showModal} setShowModal={setShowModal}>
                  <div className='modal'>
                    <div className='modal__header'>
                      <h2 className='modal__header__title'>Modifier mon mot de passe</h2>
                      <button className='modal__header__button' onClick={() => setShowModal(false)}><i className="fa-solid fa-square-xmark"></i></button>
                    </div>
                    <div className='separator'></div>

                    <form onSubmit={handleSubmit} action="#" className='modal__form'>
                      <div>
                        <label htmlFor="password">Mot de passe actuel</label>
                        <input type="password" name="password" id="password" placeholder='*********' />
                      </div>
                      <div>
                        <label htmlFor="password">Nouveau mot de passe</label>
                        <input type="password" name="password" id="password" placeholder='*********' />
                      </div>
                      <div>
                        <label htmlFor="password">Confirmer le mot de passe</label>
                        <input type="password" name="password" id="password" placeholder='*********' />
                      </div>
                      <button type="submit" className='button'>Modifier</button>
                    </form>
                  </div>
                </Modal>
              </div>

              <div>
                <h3 className='pagePattern__subheading'>Accès réglementé</h3>
                <div className='separator'></div>
                <div className='profil__box'>
                  <SelectComponent readonly={true} options={user.userRoles} userData={user.userRoles} />
                  <SelectComponent readonly={true} options={status} userData={user.userStatus} />
                  <SelectComponent readonly={true} options={instruments} userData={user.userInstruments} />
                </div>
              </div>

              <div>
                <h3 className='pagePattern__subheading'>Notifications</h3>
                <div className='separator'></div>
                <div className='notifications profil__box'>
                  <input type="checkbox" name="checkbox" id="checkbox" className='checkbox' />
                  <label htmlFor="checkbox">Je souhaites recevoir les actualités et les évènements de La Concordia par mail.</label>
                </div>
                <button className='button'>Mettre à jour</button>
              </div>
            </div>
          </>}
      </div>
    </div>
  )
}