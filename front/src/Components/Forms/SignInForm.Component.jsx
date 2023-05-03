import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../Router';

// Composant SignInForm utilisé sur la page "SignIn".

export default function SignInForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Création de la fonction "verification" qui empeche le navigateur de recharger la page lors du clic sur le bouton "Se connecter" du formulaire.
  const verification = async (event) => {
    event.preventDefault()
    const userData = {
      email,
      password
    }

    const response = await useApi.user.SignIn(userData);
    console.log("Response : ", response)
    if (response && response.data && response.data.token) {
      setEmail("");
      setPassword("");
      localStorage.setItem("accessToken", response.data.token);
      useApi.updateAccessToken(response.data.token);
      navigate("/espace-membre");
    } else {
      alert("E-mail ou mot de passe incorrect")
    }
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
