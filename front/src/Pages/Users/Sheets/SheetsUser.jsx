import React from 'react';
import SheetsDatas from './../../../data/Sheets';
import InstrumentsDatas from './../../../data/Instruments';
import UsersDatas from './../../../data/Users';

// Page SheetsUser qui renvoi la liste des partitions liées aux instruments pratiqués par l'utilisateur.

export default function SheetsUser() {
  return (
    <div className='usersPage'>
      <div id='category'>
        <h2>Mes partitions</h2>
        <h3>Consultez et téléchargez vos partitions</h3>
      </div>


      <div className='tablePagePattern'>

        {InstrumentsDatas.map((instrument) => {
          if (UsersDatas[0].instruments.includes(instrument)) {
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
                    {SheetsDatas.map((sheet) => {
                      if (sheet.instruments.includes(instrument)) {
                        return (
                          <tr>
                            <td>{sheet.title}</td>
                            <td className='table__buttonTd'>
                              <button className='button'><i className="fa-solid fa-eye"></i></button>
                              <button className='button'><i class="fa-solid fa-file-arrow-down"></i></button>
                            </td>
                          </tr>
                        )
                      }
                    })}
                  </tbody>
                </table>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}