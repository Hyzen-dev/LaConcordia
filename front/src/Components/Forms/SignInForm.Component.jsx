import React from 'react';

// Composant SignInForm utilisé sur la page "SignIn".

export default function SignInForm() {

  // Création de la fonction "verification" qui empeche le navigateur de recharger la page lors du clic sur le bouton "Se connecter" du formulaire.
  const verification = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      {/* Utilisation de la fonction "verification" lors de l'envoi du formulaire. */}
      <form method="post" onSubmit={(event) => verification(event)}>
        <fieldset className='form'>
          <input type="email" name="email" placeholder='E-mail*' />
          <input type="password" name="password" placeholder='Mot de passe*' />
          <button type="submit">Se connecter</button>
        </fieldset>
      </form>
    </div>
  )
}
