import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userSignIn } from '../../store/actions/userActions';



// Composant SignInForm utilisé sur la page "SignIn".

export default function SignInForm() {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Création de la fonction "verification" qui empeche le navigateur de recharger la page lors du clic sur le bouton "Se connecter" du formulaire.
  const verification = (event) => {
    event.preventDefault()
    dispatch(userSignIn({
      email,
      password
    }))
  }

  return (
    <div>
      {/* Utilisation de la fonction "verification" lors de l'envoi du formulaire. */}
      <form method="post" onSubmit={(event) => verification(event)}>
        <fieldset className='form'>
          <input type="email" name="email" placeholder='E-mail*'
            onChange={(event) => setEmail(event.currentTarget.value)}
            value={email}
          />

          <input type="password" name="password" placeholder='Mot de passe*'
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
          />
          <button type="submit">Se connecter</button>
        </fieldset>
      </form>
    </div>
  )
}
