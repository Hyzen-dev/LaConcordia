import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SheetsData from './../../../data/Sheets';
import InstrumentsData from './../../../data/Instruments';
import SheetInstrument from '../../../data/Sheet-Instrument';


// Page SheetsList qui renvoi la liste des partitions déjà créées.

export default function SheetsList() {
  return (
    <div>
      <Helmet><title>La Concordia - Partitions</title></Helmet>

      <div className='usersPage'>
        <div id='category'>
          <h2>Partitions</h2>
          <h3>Modifiez ou supprimez une partition</h3>
        </div>

        <div className='tablePagePattern'>

          <table className='table'>
            <thead>
              <tr>
                <th className='table__header'>Titre</th>
                <th className='table__header'>Instruments</th>
                <th className='table__buttonHeader'>Partition</th>
              </tr>
            </thead>

            <tbody>
              {SheetsData.map((sheet) => {
                return (
                  <tr key={sheet.id} className='table__rows'>

                    <td>{sheet.title}</td>

                    <td >
                      <div className='table__rows__instruments'>
                        {SheetInstrument.map((sheetinstrument) => {
                          if (sheetinstrument.sheetId === sheet.id) {
                            return (
                              <p>
                                {InstrumentsData.map((instrument) => {
                                  if (sheetinstrument.instrumentId === instrument.id) {
                                    return (
                                      instrument.label + ' '
                                    )
                                  }
                                  return null
                                })}
                              </p>
                            )
                          }
                          return null
                        })}
                      </div>
                    </td>

                    <td className='table__buttonTd'>
                      <Link to={`/espace-membre/partitions/gestion/${sheet.id}`} className="button">
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                      <button className='button'><i className="fa-solid fa-xmark"></i></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}