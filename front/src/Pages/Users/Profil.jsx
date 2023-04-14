import React, { useState, useEffect } from 'react';
import InformationsForm from '../../Components/Users/InformationsForm.Components';
import { Link, useParams } from 'react-router-dom';
import AccessForm from '../../Components/Users/AccessForm.Component';
import SelectComponent from '../../Components/Users/Select.Component';
import roles from '../../data/Roles';
import users from '../../data/Users';
import status from '../../data/Status';
import instruments from '../../data/Instruments';
import Modal from '../../Components/Modal.Component';

export default function Profil(props) {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setUser(users.find(user => user.id === parseInt(id)));
  }, [id]);
  if (!user || user.length <= 0 || typeof (user.role) !== 'object' || typeof (user.status) !== 'object' || typeof (user.instruments) !== 'object') {
    return <h1>Utilisateur introuvable</h1>
  }

  console.log(user)
  const userRoles = user.role
  const userStatus = user.status
  const userInstruments = user.instruments

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.password.value)
    setShowModal(false);
  }
  return (
    <div id='usersContent'>
      <div id='category'>
        <h2>Mon Profil</h2>
      </div>

      <div id='box'>
        <h3>Informations personnelles</h3>
        <InformationsForm />
        <p>Si vous souhaitez modifier vos informations, veuillez nous contacter <Link to={'/contact'}>ici.</Link></p>

        <button onClick={() => setShowModal(true)}>Modifier mon mot de passe</button>

        <Modal showModal={showModal} setShowModal={setShowModal}>
          <form onSubmit={handleSubmit} action="#">
            <label htmlFor="password">Mot de passe actuel</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="password">Nouveau mot de passe</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="password">Confirmer le mot de passe</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Modifier</button>
          </form>
        </Modal>
      </div>

      <div id='box'>
        <h3>Accès réglementé</h3>
        <button>Accès panel</button>
        <AccessForm />
      </div>

      <div id='box'>
        <h3>Notifications</h3>

        <SelectComponent options={roles} userData={userRoles} />
        <SelectComponent options={status} userData={userStatus} />
        <SelectComponent options={instruments} userData={userInstruments} />
      </div>
    </div>
  )
}
