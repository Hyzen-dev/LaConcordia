// Géré par le rôle : Chef, sous-chef, admin

import React from 'react'
import CreateForm from '../../../Components/Forms/CreateForm.Component'

export default function SheetsCreate() {
  return (
    <div className='usersPage'>
      <div id='category'>
        <h2>Partitions</h2>
        <h3>Ajouter une nouvelle partition</h3>
      </div>
      <div className='pagePattern'>
        <CreateForm />
      </div>
    </div>
  )
}
