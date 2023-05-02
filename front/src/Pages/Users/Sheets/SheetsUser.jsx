import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Modal from '../../../Components/Modal/ModalPdf.Component';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import file from './../../../assets/sheets.pdf'
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import InstrumentsDatas from './../../../data/Instruments';
import SheetsDatas from './../../../data/Sheets';
import userInstrument from '../../../data/User-Instrument';
import sheetInstrument from '../../../data/Sheet-Instrument';
import { Link } from 'react-router-dom';

// Page SheetsUser qui renvoi la liste des partitions liées aux instruments pratiqués par l'utilisateur.

export default function SheetsUser() {

  const [showModal, setShowModal] = useState(false);

  const [selectedSheet, setSelectedSheet] = useState({});


  const handleModal = (data) => {
    setSelectedSheet(data);
    setShowModal(true);
  }











  return (
    <div>
      <Helmet><title>La Concordia - Partitions</title></Helmet>

      <div className='usersPage'>
        <div id='category'>
          <h2>Mes partitions</h2>
          <h3>Consultez et téléchargez vos partitions</h3>
        </div>


        <div className='tablePagePattern'>


          {userInstrument.map((userinstrument) => {
            if (userinstrument.userId === 1) {
              return (
                <>
                  {InstrumentsDatas.map((instrument) => {
                    if (userinstrument.instrumentId === instrument.id) {
                      return (
                        <div>
                          <h2>{instrument.label}</h2>
                          <div className='separator'></div>

                          <table>
                            <thead>
                              <tr>
                                <th className='table__header'>Titre</th>
                                <th className='table__buttonHeader'>Partition</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sheetInstrument.map((sheetinstrument) => {
                                if (userinstrument.instrumentId === sheetinstrument.instrumentId) {
                                  return (
                                    <>
                                      {SheetsDatas.map((sheet) => {
                                        if (sheet.id === sheetinstrument.sheetId) {
                                          return (
                                            <tr>
                                              <td>{sheet.title}</td>
                                              <td className='table__buttonTd'>
                                                <button className='button' onClick={() => handleModal(sheet)}>
                                                  <i className="fa-solid fa-eye"></i>
                                                </button>
                                                {/* <a href={file} download className='link'> */}
                                                  <button className='button'>
                                                    <i className="fa-solid fa-file-arrow-down"></i>
                                                  </button>
                                                {/* </a> */}
                                              </td>
                                            </tr>
                                          )
                                        }
                                        return null
                                      })}
                                    </>
                                  )
                                }
                                return null
                              })}

                            </tbody>
                          </table>
                        </div>
                      )
                    }
                    return null
                  })}
                </>
              )
            }
            return null
          })}
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <div className='modal'>
              <div className='modal__header'>
                <h2>{selectedSheet.title}</h2>
                <button className='modal__header__button' onClick={() => setShowModal(false)}><i className="fa-solid fa-square-xmark"></i></button>
              </div>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div
                  style={{
                    height: '400px',
                    width: '700px',
                    padding: '20px 0px',
                    backgroundColor: 'none',
                  }}
                >
                  <Viewer fileUrl={file} />
                </div>
              </Worker>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}