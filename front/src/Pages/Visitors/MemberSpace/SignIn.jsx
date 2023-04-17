import React from 'react'
import SignInForm from '../../../Components/Visitors/SignInForm.Component';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='signIn'>
      <div id='category'>
        <h2>Connexion</h2>
        <h3>Connectez-vous à votre compte</h3>
      </div>
      <div className='pagePattern'>
        <SignInForm />
        <p className='signIn__details'>Pas encore inscrit ? <Link to={'/inscription'} className='signIn__details__link'>Inscrivez-vous.</Link></p>
      </div>
    </div>
  )
}
