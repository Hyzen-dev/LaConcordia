import React from 'react';
import SheetsDatas from './../../../data/Sheets';
import InstrumentsDatas from './../../../data/Instruments';


// Page SheetsList qui renvoi la liste des partitions déjà créées.

export default function SheetsList() {
  return (
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
            {SheetsDatas.map((sheet) => {
              return (
                <tr key={sheet.id} className='table__rows'>

                  <td>{sheet.title}</td>

                  <td>
                    {sheet.instruments.map((instrument) => {
                      return instrument.label + ' ';
                    })}
                  </td>

                  <td className='table__buttonTd'>
                    <button className='button'><i class="fa-solid fa-pencil"></i></button>
                    <button className='button'><i className="fa-solid fa-xmark"></i></button>
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