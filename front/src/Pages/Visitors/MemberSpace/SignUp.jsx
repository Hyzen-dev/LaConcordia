import React from 'react'
import SignUpForm from '../../../Components/SignUpForm.Component'
import { Link } from 'react-router-dom';


export default function SignUp() {
  return (
    <div>
      <h2>Inscription</h2>
      <h3>Inscrivez-vous</h3>
      <SignUpForm />
      <p>*En vous inscrivant, vous acceptez les <Link to="#">conditions générales d'utilisation</Link> du site 'La Concordia'.</p>
      <p>Déjà inscrit ? <Link to={'/connexion'}>Connectez-vous.</Link></p>
    </div>
  )
}