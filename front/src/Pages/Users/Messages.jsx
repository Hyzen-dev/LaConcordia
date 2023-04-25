import React, { useState } from 'react';
import Modal from '../../Components/Modal/Modal.Component';
import ContactDatas from './../../data/Contact';

// Page Messages qui affiche la liste des messages reçus par le biais de formulaire de contact.

export default function Messages() {

  // Utilisation du Hook useState pour définir la variable "showModal" et son état qui est initialisé avec le booléen "false".
  const [showModal, setShowModal] = useState(false);

  // Utilisation du Hook useState pour définir la variable "selectedMessage" et son état qui est initialisé comme état un objet vide.
  const [selectedMessage, setSelectedMessage] = useState({});

  // Création de la fonction handleModal qui prend un paramètre "data" en entrée. La fonction permet d'attribuer le paramètre "data" comme étant la nouvelle valeur de "selectedMessage" et défini le booléen "true" comme nouvelle valeur de "showModal"
  const handleModal = (data) => {
    setSelectedMessage(data);
    setShowModal(true);
  }

  return (
    <div className='usersPage'>
      <div id='category'>
        <h2>Mes messages</h2>
      </div>
        <div className='tablePagePattern'>
          <table className='table'>
            <thead>
              <tr>
                <th className='table__header'>Date</th>
                <th className='table__header'>Sujet</th>
                <th className='table__buttonHeader'>Message</th>
              </tr>
            </thead>

            {/* Le corps du tableau est constitué grace à l'utilisation de la fonction ".map()" sur les données "ContactDatas". Cette fonction retourne une nouvelle ligne de tableau avec les informations du message pour chaque objet présent dans le fichier de données "ContactDatas" */}
            <tbody>
              {ContactDatas.map((contact) => {
                return (
                  <tr key={contact.id} className='table__rows'>
                    <td>{contact.subject}</td>
                    <td>{contact.createdAt}</td>
                    <td className='table__buttonTd'>
                      {/* Lors du clic sur le bouton, la fonction "hangelModal" est appelée avec l'objet "contact" en paramètre d'entrée */}
                      <button className='button' onClick={() => handleModal(contact)}><i className="fa-solid fa-eye"></i></button>
                      <button className='button'><i className="fa-solid fa-xmark"></i></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>

            {/* Intégration du composant "Modal" et envoi des variable "showModal" et "setShowModal" en tant que props  */}
            <Modal showModal={showModal} setShowModal={setShowModal}>
              <div className='modal'>
                <div className='modal__header'>
                  <h2 className='modal__header__title'>Message du {selectedMessage.createdAt} - {selectedMessage.subject}</h2>
                  {/* Modification de la variable "setShowModal" avec la valeur booléenne "false" afin de permettre de fermer la modal lors du clic. */}
                  <button className='modal__header__button' onClick={() => setShowModal(false)}><i className="fa-solid fa-square-xmark"></i></button>
                </div>

                <div className='separator'></div>

                <div>
                  <p>{selectedMessage.message}</p>
                </div>

                <h3>Contact</h3>
                <ul>
                  <li>{selectedMessage.firstname} {selectedMessage.lastname}</li>
                  <li>{selectedMessage.mail}</li>
                  <li>{selectedMessage.phone}</li>
                </ul>
              </div>
            </Modal>
          </table>
        </div>
      </div>
  )
}