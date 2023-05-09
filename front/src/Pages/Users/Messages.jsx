import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Modal from '../../Components/Modal/Modal.Component';
import ContactDatas from './../../data/Contact';
import { useApi } from '../../Router';


export default function Messages() {

  const [showModal, setShowModal] = useState(false);

  const [selectedMessage, setSelectedMessage] = useState({});

  const [messages, setMessages] = useState(ContactDatas);

  const [readMessages, setReadMessages] = useState([]);

  const [allMessages, setAllMessages] = useState([])

  const fetchAllMessages = async () => {
    const response = await useApi.message.GetAll();
    return setAllMessages(response.data);
  }

  useEffect(() => {
    fetchAllMessages()
  }, []);


  const handleModal = (data) => {
    setSelectedMessage(data);
    setShowModal(true)
    setReadMessages([...readMessages, data.id]);
  }

  const handleDelete = (id) => {
    const filteredMessages = messages.filter((message) => message.id !== id);
    setMessages(filteredMessages);
  }



  const compareMessagesByDate = (a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1; // a avant b
    } else if (a.createdAt < b.createdAt) {
      return 1; // b avant a
    } else {
      return 0; // aucun changement
    }
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
              {allMessages.sort(compareMessagesByDate).map((contact) => {
                const isRead = readMessages.includes(contact.id);

                const formattedDate = `${new Date(contact.createdAt).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })} - ${new Date(contact.createdAt).toLocaleTimeString('fr-FR', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}`;


                return (
                  <tr key={contact.id} style={{ fontStyle: isRead ? "normal" : "italic" }}>
                    <td>{formattedDate}</td>
                    <td>{contact.subject}</td>
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
                  <h2 className='modal__header__title'>Message du {`${new Date(selectedMessage.createdAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })} - ${new Date(selectedMessage.createdAt).toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}`} - {selectedMessage.subject}</h2>
                  <button className='modal__header__button' onClick={() => setShowModal(false)}><i className="fa-solid fa-square-xmark"></i></button>
                </div>

                <div className='separator'></div>

                <div>
                  <p>{selectedMessage.content}</p>
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