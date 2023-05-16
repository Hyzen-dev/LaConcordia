import React from 'react'
import { Helmet } from 'react-helmet'

export default function EmailVerification() {
    return (
        <div className='pagePattern'>
            <Helmet><title>La Concordia - Vérification</title></Helmet>

            <div id='category'>
                <h2>Validation de votre compte</h2>
                <h3>Renseignez le code qui vous a été envoyé par mail pour valider votre compte</h3>
            </div>
            <div className='pagePattern__content'>
                <form method="post">
                    <fieldset className='form'>

                        <input type="email" name="email" id="email" placeholder='Saisissez votre adresse mail' />
                        <input type="email" name="email" id="email" placeholder='Saisissez le code de vérification'/>
                        <button className='greenButton'>Valider</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
