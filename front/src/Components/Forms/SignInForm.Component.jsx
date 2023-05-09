import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../Router';
import { toastNotification, updateToastNotification } from '../../Router';
// Composant SignInForm utilisé sur la page "SignIn".

export default function SignInForm(props) {
  const { fetchProfile } = props;
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  // Création de la fonction "verification" qui empeche le navigateur de recharger la page lors du clic sur le bouton "Se connecter" du formulaire.
  const verification = async (event) => {
    event.preventDefault()
    const userData = {
      email,
      password
    }

    setErrors([]);
    const newError = [];

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(userData.email)) {
      newError.push('email');
    }

    if (!userData.password) {
      newError.push('password');
    }

    setErrors(newError);

    if (newError.length > 0) {
      return;
    }

    const response = await useApi.user.SignIn(userData);

    const toastId = toastNotification('loading', 'Connexion en cours...')

    if (response && response.data && response.data.token) {
      updateToastNotification(toastId, 'success', 'Connexion réussie, redirection en cours...');
      setEmail("");
      setPassword("");
      localStorage.setItem("accessToken", response.data.token);
      useApi.updateAccessToken(response.data.token);
      const profileResponse = await fetchProfile();

      if (profileResponse) {
        navigate("/espace-membre");
      }
    } else {
      updateToastNotification(toastId, 'error', 'E-mail ou mot de passe incorrect');
      // alert("E-mail ou mot de passe incorrect")
    }
  }

  return (
    <div>
      {/* Utilisation de la fonction "verification" lors de l'envoi du formulaire. */}
      <form method="post" onSubmit={(event) => verification(event)}>
        <fieldset className='form'>
          <div className="form__inputError">
            <input id='emailInput' style={errors.includes('email') ? { border: 1 + 'px solid red' } : null} type="email" name="email" placeholder='E-mail*'
              onChange={(event) => setEmail(event.currentTarget.value)}
              value={email}
            />
            {errors.includes('email') && <label htmlFor='emailInput'>Veuillez renseigner un e-mail valide</label>}
          </div>

          <div className='form__inputError'>
            <input type="password" name="password" placeholder='Mot de passe*'
              style={errors.includes('password') ? { border: 1 + 'px solid red' } : null}
              onChange={(event) => setPassword(event.currentTarget.value)}
              value={password}
            />
            {errors.includes('password') && <label htmlFor='passwordInput'>Veuillez renseigner un mot de passe</label>}
          </div>
          <button type="submit">Se connecter</button>
        </fieldset>
      </form>
    </div >
  )
}
