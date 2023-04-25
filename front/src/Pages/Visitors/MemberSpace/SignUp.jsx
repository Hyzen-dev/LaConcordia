import React from 'react'
import SignUpForm from '../../../Components/Forms/SignUpForm.Component'
import { Link } from 'react-router-dom';

// Page SignUp, qui permet l'affichage du formulaire "SignUpForm" ainsi qu'un lien menant vers le formulaire de connexion.

export default function SignUp() {
  return (
    <div>
      <div id='category'>
        <h2>Inscription</h2>
        <h3>Inscrivez-vous</h3>
      </div>
      <div className='signUp pagePattern'>

        {/* Affichage du composant SignUpForm */}
        <SignUpForm />
        <p className='signUp__cgu'>*En vous inscrivant, vous acceptez les <Link to="#" className='signUp__link'>conditions générales d'utilisation</Link> du site 'La Concordia'.</p>
        <p className='signUp__connection'>Déjà inscrit ? <Link to={'/connexion'} className='signUp__link'>Connectez-vous.</Link></p>
      </div>
    </div>
  )
}