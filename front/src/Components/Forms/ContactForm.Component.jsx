import React from 'react';

// Le composant formulaire de contact utilise la méthode post afin de protéger les informations confidentielles envoyées par le visiteur, comme l'adresse mail. Cette méthode permet également l'envoi de données en grande quantité, comme les messages

export default function ContactForm() {
    return (
        <div>
            <form method="post" >
                <fieldset className='form'>
                    <div className='form__box'>
                    <input type="text" name="lastname" id="lastname" placeholder='Nom *' required />
                    <input type="text" name="firstname" id="firstname" placeholder='Prénom *' required />
                    </div>
                    <div className='form__box'>
                    <input type="tel" name="phone" id="phone" placeholder='Téléphone' />
                    <input type="email" name="email" placeholder='E-mail *' required />
                    </div>
                    <input type="text" name="subject" id="subject" placeholder='Sujet *' required />
                    <textarea name="message" id="message" cols="30" rows="8" placeholder='Message *' required ></textarea>
                    <button type="submit">Envoyer</button>
                </fieldset>
            </form>
        </div>
    )
}
