import React from 'react';
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function SignUpForm() {

    const onCaptchaChange = (value) => {
        console.log("Captcha value:", value);
    }

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [civility, setCivility] = useState("")
    const [password, setPassword] = useState("")

    const verification = (event) => {
        event.preventDefault()
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
                            onChange={(event) => setLastName(event.currentTarget.value)}
                            value={lastName}
                        />

                        <input
                            type="text"
                            name='firstname'
                            placeholder='Prénom *'
                            onChange={(event) => setFirstName(event.currentTarget.value)}
                            value={firstName}
                        />
                    </div>

                    <div className='form__box'>
                        <input
                            type="email"
                            name='email'
                            placeholder='E-mail *'
                            onChange={(event) => setEmail(event.currentTarget.value)}
                            value={email}
                        />

                        <input
                            type="tel"
                            name='phone'
                            placeholder='Téléphone'
                            maxLength={"10"}
                            onChange={(event) => setPhone(event.currentTarget.value)}
                            value={phone}
                        />
                    </div>

                    <select name="civility" onSelect={(event) => setCivility(event.currentTarget.value)}>
                        <option value="Civilité" disabled>Civilité</option>
                        <option value="Madame">Madame</option>
                        <option value="Monsieur">Monsieur</option>
                    </select>

                    <input
                        type="password"
                        name="password1"
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
