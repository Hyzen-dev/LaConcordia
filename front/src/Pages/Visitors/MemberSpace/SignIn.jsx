import React from 'react'
import SignInForm from '../../../Components/Forms/SignInForm.Component';
import { Link } from 'react-router-dom';

// Page SignIn, qui permet l'affichage du formulaire "SignInForm" ainsi qu'un lien menant vers le formulaire d'inscritpion.

export default function SignIn() {
  return (
    <div className='signIn'>
      <div id='category'>
        <h2>Connexion</h2>
        <h3>Connectez-vous à votre compte</h3>
      </div>
      <div className='pagePattern'>

        {/* Affichage du composant SignInForm */}
        <SignInForm />
        <p className='signIn__details'>Pas encore inscrit ? <Link to={'/inscription'} className='signIn__details__link'>Inscrivez-vous.</Link></p>
      </div>
    </div>
  )
}
