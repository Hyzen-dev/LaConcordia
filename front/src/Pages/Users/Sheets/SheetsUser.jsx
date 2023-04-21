import React from 'react';
import UsersDatas from './../../../data/Users';
import SheetsDatas from './../../../data/Sheets';



export default function SheetsUser() {
  return (
    <div className='usersPage'>
      <div id='category'>
        <h2>Mes partitions</h2>
      </div>
      <div className='pagePattern'>

        {UsersDatas[0].instruments.map((userInstrument) => (
          <div key={userInstrument}>
            <div>{userInstrument.name}</div>
            {SheetsDatas.map((sheet) => {
              if (sheet.instruments.includes(userInstrument)) {
                return <div key={sheet.id}>{sheet.sheetFile}</div>;
              }
            })}
          </div>
        ))}
      </div>
    </div>
  )
}