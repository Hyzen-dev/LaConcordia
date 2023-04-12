import React from 'react'
import SignUpForm from '../../../Components/Visitors/SignUpForm.Component'
import { Link } from 'react-router-dom';


export default function SignUp() {
  return (
    <div>
      <div id='category'>
        <h2>Inscription</h2>
        <h3>Inscrivez-vous</h3>
      </div>
      <div>
        <SignUpForm />
        <p>*En vous inscrivant, vous acceptez les <Link to="#">conditions générales d'utilisation</Link> du site 'La Concordia'.</p>
        <p>Déjà inscrit ? <Link to={'/connexion'}>Connectez-vous.</Link></p>
      </div>
    </div>
  )
}