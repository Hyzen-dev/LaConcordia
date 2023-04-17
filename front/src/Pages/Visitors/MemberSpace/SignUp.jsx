import React from 'react'
import SignUpForm from '../../../Components/Forms/SignUpForm.Component'
import { Link } from 'react-router-dom';


export default function SignUp() {
  return (
    <div>
      <div id='category'>
        <h2>Inscription</h2>
        <h3>Inscrivez-vous</h3>
      </div>
      <div className='signUp pagePattern'>
        <SignUpForm />
        <p className='signUp__cgu'>*En vous inscrivant, vous acceptez les <Link to="#" className='signUp__link'>conditions générales d'utilisation</Link> du site 'La Concordia'.</p>
        <p className='signUp__connection'>Déjà inscrit ? <Link to={'/connexion'} className='signUp__link'>Connectez-vous.</Link></p>
      </div>
    </div>
  )
}