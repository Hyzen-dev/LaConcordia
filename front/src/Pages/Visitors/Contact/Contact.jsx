import React from 'react'
import ContactForm from '../../../Components/Forms/ContactForm.Component'

export default function Contact() {
  return (
    <div>
      <div id='category'>
        <h2>Contact</h2>
        <h3>Vous avez une question ?</h3>
        <h3>Vous souhaitez intégrer notre formation ?</h3>
      </div>

      <div className='pagePattern'>
        <div>
          <h3 className='pagePattern__subheading'>Contact</h3>
          <div className='separator'></div>
          <p>Salle Léon URBAIN</p>
          <p>Ecole de Musique rue Ferrer 62750 LOOS EN GOHELLE</p>
          <p>+33 X.XX.XX.XX.XX</p>
        </div>

        <div>
          <h3 className='pagePattern__subheading'>Formulaire</h3>
          <div className='separator'></div>
          <ContactForm />
        </div>




      </div>
    </div>
  )
}
