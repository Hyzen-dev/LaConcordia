import React from 'react'
import SignInForm from '../../../Components/SignInForm.Component';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div>
      <h2>Connexion</h2>
      <h3>Connectez-vous à votre compte</h3>
      <SignInForm />
      <p>Pas encore inscrit ? <Link to={'/inscription'}>Inscrivez-vous.</Link></p>
    </div>
  )
}
