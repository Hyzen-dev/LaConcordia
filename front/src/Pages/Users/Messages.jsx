import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Modal from '../../Components/Modal/Modal.Component';
import ContactDatas from './../../data/Contact';


export default function Messages() {

  const [showModal, setShowModal] = useState(false);

  const [selectedMessage, setSelectedMessage] = useState({});

  const [messages, setMessages] = useState(ContactDatas);

  const [readMessages, setReadMessages] = useState([]);

  const handleModal = (data) => {
    setSelectedMessage(data);
    setShowModal(true)
    setReadMessages([...readMessages, data.id]);
  }

  const handleDelete = (id) => {
    const filteredMessages = messages.filter((message) => message.id !== id);
    setMessages(filteredMessages);
  }



  return (
    <div>
      <Helmet><title>La Concordia - Messages</title></Helmet>

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

            <tbody>
              {messages.map((contact) => {
                const isRead = readMessages.includes(contact.id);

                return (
                  <tr key={contact.id} style={{ fontStyle: isRead ? "normal" : "italic" }}>
                    <td>{contact.subject}</td>
                    <td>{contact.createdAt}</td>
                    <td className='table__buttonTd'>
                      {/* Lors du clic sur le bouton, la fonction "handleModal" est appelée avec l'objet "contact" en paramètre d'entrée */}
                      <button className='button' onClick={() => handleModal(contact)}><i className="fa-solid fa-eye"></i></button>
                      <button className='button' onClick={() => handleDelete(contact.id)}><i className="fa-solid fa-xmark"></i></button>
                    </td>
                    {!isRead ? <td><i className="fa-solid fa-circle notificationCircle"></i></td> : <td></td>}
                  </tr>
                )
              })}
            </tbody>


            <Modal showModal={showModal} setShowModal={setShowModal}>
              <div className='modal'>
                <div className='modal__header'>
                  <h2 className='modal__header__title'>Message du {selectedMessage.createdAt} - {selectedMessage.subject}</h2>
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
    </div>
  )
}