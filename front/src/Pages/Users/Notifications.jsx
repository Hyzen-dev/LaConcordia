import React, { useState } from 'react';
import Modal from '../../Components/Modal/Modal.Component';
import UsersDatas from './../../data/Users';
import SheetsDatas from './../../data/Sheets';


export default function Notifications() {

  const [showModal, setShowModal] = useState(false);

  const [instrumentName, setInstrumentName] = useState("");

  return (
    <div className='usersPage'>
      <div id='category'>
        <h2>Mes notifications</h2>
      </div>
      <div className='pagePattern tablePagePattern'>
        <table className='table'>
          <thead>
            <tr>
              <th className='table__header'>Date</th>
              <th className='table__header'>Sujet</th>
              <th className='table__header buttonTh'>Notification</th>
            </tr>
          </thead>

          <tbody>
            {SheetsDatas.map((sheet) => {
              return (
                <React.Fragment key={sheet.id}>
                  {UsersDatas[0].instruments.map((userInstrument) => {
                    if (sheet.instruments.includes(userInstrument)) {
                      return (
                        <tr key={userInstrument.id} className='table__rows'>
                          <td>{sheet.createdAt}</td>
                          <td>Nouvelle partition</td>
                          <td className='table__buttonTd'>
                            <button className='button' onClick={() => {setShowModal(true); setInstrumentName(userInstrument.name)}}><i className="fa-solid fa-eye"></i></button>
                            <button className='button'><i className="fa-solid fa-xmark"></i></button>

                            <Modal showModal={showModal} setShowModal={setShowModal}>
                              <div className='modal'>
                                <div className='modal__header'>
                                  <h2 className='modal__header__title'>Notification du {sheet.createdAt}</h2>
                                  <button className='modal__header__button' onClick={() => setShowModal(false)}><i className="fa-solid fa-square-xmark"></i></button>
                                </div>
                                <div className='separator'></div>
                                <p>{sheet.author.firstName} {sheet.author.lastName} a mis une nouvelle partition de {instrumentName} à votre disposition</p>
                              </div>
                            </Modal>
                          </td>
                        </tr>
                      )
                    }
                  })}
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}