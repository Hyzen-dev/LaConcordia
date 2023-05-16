import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom';
import { useApi } from './../../../Router';
import { toastNotification, updateToastNotification } from './../../../Router';


export default function ResetPassword() {
    const navigate = useNavigate();

    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const [errors, setErrors] = useState([])

    const verification = async (event) => {
        event.preventDefault()

        const userData = {
            password
        }

        setErrors([]);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i;

        const newError = [];

        if (password !== passwordConfirmation) {
            newError.push("passwordConfirmation");
        }

        setErrors(newError);

        if (newError.length > 0) {
            return;
        }

        const toastId = toastNotification('loading', 'Veuillez patienter...');
        const response = await useApi.user.ResetPassword(userData);
        if (!response) {
            return updateToastNotification(toastId, 'error', 'Une erreur est survenue, veuillez réessayer plus tard.');
        }
        if (response.error) {
            if (response.message) {
                updateToastNotification(toastId, 'error', 'Une erreur est survenue : ' + response.message + '.')
            } else {
                updateToastNotification(toastId, 'error', 'Une erreur est survenue, veuillez réessayer plus tard.')
            }
        } else {
            updateToastNotification(toastId, 'success', 'Votre mot de passe a bien été modifié.')
            navigate('/connexion');
        }


    }

    return (
        <div className='pagePattern'>
            <Helmet><title>La Concordia - Réinitialisation</title></Helmet>

            <div id='category'>
                <h2>Réinitialisez votre mot de passe</h2>
            </div>
            <Link to='/connexion' className='returnButton'>
                <i class="fa-solid fa-circle-up fa-rotate-270"></i>
            </Link>
            <div className='pagePattern__content'>
                <form method="post">
                    <fieldset className='form'>
                        <input type="email" name="email" id="email" placeholder='{adresse mail}' readOnly disabled/>

                        <div className='form__inputError'>
                        <input style={errors.includes("password") ? { border: 1 + 'px solid red' } : null}
                            type="password"
                            id='password1'
                            name="password1"
                            // Lors de la modification du champs par l'utilisateur, la valeur de "password" est mise à jour avec les informations renseignées
                            onChange={(event) => setPassword(event.currentTarget.value)}
                            value={password}
                            placeholder='Nouveau mot de passe *'
                        />
                        {errors.includes("password") && <label htmlFor="password1">Le mot de passe doit contenir au moins 8 caractères dont une majuscule, une minuscule, un chiffre et un caractère spécial.</label>}
                    </div>

                    <div className='form__inputError'>
                        <input style={errors.includes("passwordConfirmation") ? { border: 1 + 'px solid red' } : null} type="password" id='password2' name="password2" placeholder='Confirmation *'
                            onChange={(event) => setPasswordConfirmation(event.currentTarget.value)}
                            value={passwordConfirmation}
                        />
                        {errors.includes("passwordConfirmation") && <label htmlFor="password2">Le mot de passe ne correspond pas</label>}
                    </div>


                        <button className='greenButton'>Valider</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
