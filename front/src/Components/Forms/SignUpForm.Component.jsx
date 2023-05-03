import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useApi } from '../../Router';
import { useNavigate } from 'react-router-dom';

// Composant SignUpForm utilisé sur la page "SignUp"

export default function SignUpForm() {
    const navigate = useNavigate();
    // Création de la fonction "onCaptchaChange" qui permet l'affichage de la valeur de la réponse du Captcha dans la console.
    const onCaptchaChange = (value) => {
        console.log("Captcha value:", value);
    }

    // Utilisation du Hook useState pour définir les variables relatives aux champs du formulaire et leur état.
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    // Création de la fonction "verification" qui empeche le navigateur de recharger la page lors du clic sur le bouton "Se connecter" du formulaire.
    const verification = async (event) => {
        event.preventDefault()

        const userData = {
            firstName,
            lastName,
            email,
            phoneNumber: phone,
            password
        }

        const response = await useApi.user.SignUp(userData);

        if (response) {
            console.log(response);
            navigate('/connexion');
        } else {
            console.log('Une erreur est survenue');
        }
    }

    return (
        <div>
            <form method="post" onSubmit={(event) => verification(event)}>
                <fieldset className='form'>
                    <div className='form__box'>
                        <input
                            type="text"
                            name='lastname'
                            placeholder='Nom *'
                            // Lors de la modification du champs par l'utilisateur, la valeur de "lastName" est mise à jour avec les informations renseignées
                            onChange={(event) => setLastName(event.currentTarget.value)}
                            value={lastName}
                        />

                        <input
                            type="text"
                            name='firstname'
                            placeholder='Prénom *'
                            // Lors de la modification du champs par l'utilisateur, la valeur de "firstName" est mise à jour avec les informations renseignées
                            onChange={(event) => setFirstName(event.currentTarget.value)}
                            value={firstName}
                        />
                    </div>

                    <div className='form__box'>
                        <input
                            type="email"
                            name='email'
                            placeholder='E-mail *'
                            // Lors de la modification du champs par l'utilisateur, la valeur de "email" est mise à jour avec les informations renseignées
                            onChange={(event) => setEmail(event.currentTarget.value)}
                            value={email}
                        />

                        <input
                            type="tel"
                            name='phone'
                            placeholder='Téléphone'
                            maxLength={"10"}
                            // Lors de la modification du champs par l'utilisateur, la valeur de "phone" est mise à jour avec les informations renseignées
                            onChange={(event) => setPhone(event.currentTarget.value)}
                            value={phone}
                        />
                    </div>

                    <select name="civility">
                        <option value="Civilité" disabled>Civilité</option>
                        <option value="Madame">Madame</option>
                        <option value="Monsieur">Monsieur</option>
                    </select>

                    <input
                        type="password"
                        name="password1"
                        // Lors de la modification du champs par l'utilisateur, la valeur de "password" est mise à jour avec les informations renseignées
                        onChange={(event) => setPassword(event.currentTarget.value)}
                        value={password}
                        placeholder='Mot de passe *'
                    />

                    <input type="password" name="password2" placeholder='Confirmation *' />

                    <div className='form__checkbox' >
                        <input type="checkbox" name="newsletter" />
                        <label htmlFor="newsletter">
                            Souhaitez-vous recevoir les actualités et les évènements de La Concordia par mail
                        </label>
                    </div>

                    {/* Intégration du Captcha afin de renforcer la sécurité du formulaire */}
                    <ReCAPTCHA
                        sitekey="###"
                        onChange={onCaptchaChange}
                    />

                    <button type="submit">S'inscrire</button>
                </fieldset>
            </form>
        </div>
    )
}
