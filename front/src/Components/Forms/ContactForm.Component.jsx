import React, { useState } from 'react';
import { useApi } from '../../Router';
import { toastNotification, updateToastNotification } from '../../Router';



// Le composant formulaire de contact utilise la méthode post afin de protéger les informations confidentielles envoyées par le visiteur, comme l'adresse mail. Cette méthode permet également l'envoi de données en grande quantité, comme les messages

export default function ContactForm() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const [errors, setErrors] = useState([])

    const verification = async (event) => {
        event.preventDefault()

        const messageData = {
            firstName,
            lastName,
            email,
            phoneNumber: phone,
            subject,
            message
        }

        setErrors([]);

        const newError = [];

        const nameRegex = /^[a-zA-Z]+$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/i;
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

        if (!nameRegex.test(firstName)) {
            newError.push("firstName");
        }
        if (!nameRegex.test(lastName)) {
            newError.push("lastName");
        }
        if (!emailRegex.test(email)) {
            newError.push("email");
        }
        if (phone) {
            if (!phoneRegex.test(phone)) {
                newError.push("phone");
            }
        }
        if(subject.length < 5) {
            newError.push("subject")
        }

        if (subject.length > 255) {
            newError.push("subjectLength")
        }
        if(message.length < 5) {
            newError.push("message")
        }


        setErrors(newError);

        if (newError.length > 0) {
            return;
        }

        // const response = await useApi.message.Create(messageData);
        const response = {
            error: true
        }

        const toastId = toastNotification('loading', 'Veuillez patienter...');

        if (response.error) {
            console.log('Une erreur est survenue');
            if (response.message) {
                updateToastNotification(toastId, 'error', 'Une erreur est survenue : ' + response.message + '.')
            } else {
                updateToastNotification(toastId, 'error', 'Une erreur est survenue, veuillez réessayer plus tard.')
            }
        } else {
            updateToastNotification(toastId, 'success', 'Votre compte a bien été créé, vous devez maintenant valider votre email.')
        }

    }


    return (
        <div>
            <form method="post" onSubmit={(event) => verification(event)}>
                <fieldset className='form'>
                    <div className='form__box'>
                        <div className="form__inputError">
                            <input
                                style={errors.includes('lastName') ? { border: 1 + 'px solid red' } : null}
                                type="text" name="lastname"
                                id="lastname"
                                placeholder='Nom *'
                                onChange={(event) => setLastName(event.currentTarget.value)}
                            />
                            {errors.includes('lastName') && <label htmlFor='lastname'>Veuillez renseigner un nom valide</label>}
                        </div>
                        <div className='form__inputError'>
                            <input
                                style={errors.includes('firstName') ? { border: 1 + 'px solid red' } : null}
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder='Prénom *'
                                onChange={(event) => setFirstName(event.currentTarget.value)}
                            />
                            {errors.includes('firstName') && <label htmlFor='firstname'>Veuillez renseigner un prénom valide</label>}
                        </div>

                    </div>
                    <div className='form__box'>
                        <div className='form__inputError'>
                            <input
                                style={errors.includes('phone') ? { border: 1 + 'px solid red' } : null}
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder='Téléphone'
                                onChange={(event) => setPhone(event.currentTarget.value)}
                            />
                            {errors.includes('phone') && <label htmlFor='phone'>Veuillez renseigner un numéro de téléphone valide</label>}
                        </div>
                        <div className='form__inputError'>
                            <input
                                style={errors.includes('email') ? { border: 1 + 'px solid red' } : null}
                                type="email"
                                name="email"
                                id='email'
                                placeholder='E-mail *'
                                onChange={(event) => setEmail(event.currentTarget.value)}

                            />
                            {errors.includes('email') && <label htmlFor='email'>Veuillez renseigner une adresse mail valide</label>}
                        </div>
                    </div>
                    <div className='form__inputError'>
                        <input
                            style={errors.includes('subject') ? { border: 1 + 'px solid red' } : null}
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder='Sujet *'
                            onChange={(event) => setSubject(event.currentTarget.value)}
                        />
                        {errors.includes('subject') && <label htmlFor='subject'>Le sujet de votre message doit contenir 5 caractères minimum</label>}
                        {errors.includes('subjectLength') && <label htmlFor='subject'>Le sujet de votre message ne doit pas contenir plus de 255 caractères</label>}
                    </div>
                    <div className='form__inputError'>
                        <textarea
                            style={errors.includes('message') ? { border: 1 + 'px solid red' } : null}
                            name="message"
                            id="message"
                            placeholder='Message *'
                            onChange={(event) => setMessage(event.currentTarget.value)}
                        ></textarea>
                        {errors.includes('message') && <label htmlFor='message'>Votre message doit contenir 5 caractères minimum</label>}
                    </div>
                    <button type="submit" className='greenButton sendButton'>Envoyer</button>
                </fieldset>
            </form>
        </div>
    )
}
