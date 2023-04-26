import React, { useState } from 'react';
import Modal from '../../Components/Modal/Modal.Component';
import UsersDatas from './../../data/Users';
import SheetsDatas from './../../data/Sheets';

// Page Notifications qui affiche la liste des notifications relatives aux partitions mise en ligne concernant les instruments joués par l'utilisateur

export default function Notifications() {

  const [sheetsData, setSheetsData] = useState(SheetsDatas);

  const handleDeleteSheet = (id) => {
    const newSheetsData = sheetsData.filter((sheet) => sheet.id !== id);
    setSheetsData(newSheetsData);
  };

  const [readNotifications, setReadNotifications] = useState([]);

  // Utilisation du Hook useState pour définir la notification selectionnée et son état. "selectedNotification" est initialisé comme étant "null".
  const [selectedNotification, setSelectedNotification] = useState(null);

  // Création de la fonction "handleModal" qui prend en paramètre "notification" et "instrumentName". Cette fonction permet de modifier l'état de "selectedNotification" en lui envoyant les valeurs de ces paramètres.
  const handleModal = (notification, instrumentName) => {
    setSelectedNotification({ notification, instrumentName });
    setReadNotifications([...readNotifications, notification.id]);
  };

  // Création de la fonction "closeModal" qui permet, lors de la fermeture de la modale, de retourner l'état de "selectedNotification" en "null".
  const closeModal = () => {
    setSelectedNotification(null);
  };

  return (
    <div className='usersPage'>
      <div id='category'>
        <h2>Mes notifications</h2>
      </div>

      <div className='tablePagePattern'>
        <table className='table'>
          <thead>
            <tr>
              <th className='table__header'>Date</th>
              <th className='table__header'>Sujet</th>
              <th className='table__buttonHeader'>Notification</th>
            </tr>
          </thead>

          <tbody>

            {/* Création d'un tableau qui, pour chaque partition, si l'utilisateur et la partition ont au moins un instrument en commun, retourne une nouvelle ligne de tableau */}
            {sheetsData.map((sheet) => {
              const sharedInstrument = sheet.instruments.filter(val => UsersDatas[0].instruments.includes(val))
              const isRead = readNotifications.includes(sheet.id);
              if (sharedInstrument.length != 0) {
                return (
                  <tr key={sheet.id} style={{ fontStyle: isRead ? "normal" : "italic" }}>
                    <td>{sheet.createdAt}</td>
                    <td>Nouvelle partition</td>
                    <td className='table__buttonTd'>
                      <button className='button' onClick={() => handleModal(sheet)}>
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button className='button' onClick={() => handleDeleteSheet(sheet.id)}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </td>
                    {!isRead ? <td><i className="fa-solid fa-circle notificationCircle"></i></td> : <td></td> }
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>

      {/* Vérification de l'état de "selectedNotification" : si cette varaible est définie et non nulle, le composant "Modal" est rendu */}
      {selectedNotification && (
        <Modal showModal={true} setShowModal={closeModal}>
          <div className='modal'>
            <div className='modal__header'>
              <h2 className='modal__header__title'>Notification du {selectedNotification.notification.createdAt}</h2>
              <button className='modal__header__button' onClick={closeModal}>
                <i className="fa-solid fa-square-xmark"></i>
              </button>
            </div>
            <div className='separator'></div>
            <p>{selectedNotification.notification.author.firstName} {selectedNotification.notification.author.lastName} a mis en ligne une nouvelle partition !</p>

            {/* Utilisation de la fonction ".map()" qui parcours la liste des instruments liés à la notification concernée pour en afficher la liste. */}
            {selectedNotification.notification.instruments.map((instrument) => {
              return (
                <p>{instrument.label}</p>
              )
            })}
            <button className='button'>Voir la partition</button>
          </div>
        </Modal>
      )}
    </div>
  );
}