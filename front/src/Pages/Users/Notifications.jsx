import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Modal from '../../Components/Modal/Modal.Component';
import UsersDatas from './../../data/Users';
import SheetsDatas from './../../data/Sheets';
import SheetInstrument from '../../data/Sheet-Instrument';
import userInstrument from '../../data/User-Instrument';
import InstrumentsData from '../../data/Instruments';


export default function Notifications() {

  const [sheetsData, setSheetsData] = useState([]);

  const handleDeleteSheet = (id) => {
    const newSheetsData = sheetsData.filter((sheet) => sheet.id !== id);
    setSheetsData(newSheetsData);
  };

  const [readNotifications, setReadNotifications] = useState([]);

  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleModal = (notification, instrumentName) => {
    setSelectedNotification({ notification, instrumentName });
    setReadNotifications([...readNotifications, notification.id]);
  };

  const closeModal = () => {
    setSelectedNotification(null);
  };

  const sheetList = [];

  return (
    <div>
      <Helmet><title>La Concordia - Notifications</title></Helmet>

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
              {userInstrument.map((userinstrument) => {
                if (userinstrument.userId === 1) {
                  return (
                    <>
                      {SheetInstrument.map((sheetinstrument) => {
                        if (userinstrument.instrumentId === sheetinstrument.instrumentId) {
                          return (
                            <>
                              {SheetsDatas.map((sheet) => {
                                const isRead = readNotifications.includes(sheet.id);
                                const isAdd = sheetList.includes(sheet.id)
                                if ((sheetinstrument.sheetId === sheet.id) && (isAdd === false)) {
                                  sheetList.push(sheet.id)
                                  console.log(sheetList)
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
                                      {!isRead ? <td><i className="fa-solid fa-circle notificationCircle"></i></td> : <td></td>}
                                    </tr>
                                  )  
                                }
                                return null
                              })
                              }
                            </>
                          )
                        }
                        return null
                      })
                      }
                    </>
                  )

                }
                return null
              })}









              {/* {sheetsData.map((sheet) => {
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
                      {!isRead ? <td><i className="fa-solid fa-circle notificationCircle"></i></td> : <td></td>}
                    </tr>
                  )
                }
              })} */}




            </tbody>
          </table>
        </div>

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

              {UsersDatas.map((user) => {
                if (selectedNotification.notification.authorId === user.id) {
                  return (
                    <div>
                      <p>{user.firstName} {user.lastName} a mis en ligne une nouvelle partition !</p>
                      <div className='separator'></div>
                    </div>
                  )
                }
                return null
              })}

              {SheetInstrument.map((sheetinstrument) => {
                if (sheetinstrument.sheetId === selectedNotification.notification.id) {
                  return (
                    <>
                      {InstrumentsData.map((instrument) => {
                        if (instrument.id === sheetinstrument.instrumentId) {
                          return (
                            <p>{instrument.label}</p>
                          )
                        }
                        return null
                      })}
                    </>
                  )
                }
                return null
              })}



              {/* {selectedNotification.notification.instruments.map((instrument) => {
                return (
                  <p>{instrument.label}</p>
                )
              })} */}




              <button className='button'>Voir la partition</button>
            </div>
          </Modal>
        )}




      </div>
    </div>
  );
}