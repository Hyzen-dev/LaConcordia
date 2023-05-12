import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SheetsData from './../../../data/Sheets';
import InstrumentsData from './../../../data/Instruments';
import SheetInstrument from '../../../data/Sheet-Instrument';


// Page SheetsList qui renvoi la liste des partitions déjà créées.

export default function SheetsList() {
  return (
    <div className='tablePage'>
      <Helmet><title>La Concordia - Partitions</title></Helmet>

      <div id='category'>
        <h2>Partitions</h2>
        <h3>Modifiez ou supprimez une partition</h3>
      </div>

      <div className='tablePage__content'>

        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Instruments</th>
              <th>Partition</th>
            </tr>
          </thead>

          <tbody>
            {SheetsData.map((sheet) => {
              return (
                <tr key={sheet.id}>
                  <td>{sheet.title}</td>
                  <td >
                    <div>
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

                  <td className='buttonCell'>
                    <Link to={`/espace-membre/partitions/gestion/${sheet.id}`} className="button buttonLink">
                      <button className='tableButton'>
                        <i className="fa-solid fa-pencil"></i>
                      </button>
                    </Link>
                    <button className='tableButton button--red'><i className="fa-solid fa-xmark"></i></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}