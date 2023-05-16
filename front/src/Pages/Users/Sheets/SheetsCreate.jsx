import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CreateForm from '../../../Components/Forms/CreateForm.Component';
import { Viewer, Worker } from '@react-pdf-viewer/core';
// import file from './../../../assets/sheets.pdf'
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Link } from 'react-router-dom';


// Page SheetsCreate qui affiche le formulaire de création d'une nouvelle partition.

export default function SheetsCreate() {
  const [file, setFile] = useState(null);

  return (
    <div className='usersPage'>
      <Helmet><title>La Concordia - Partitions</title></Helmet>

      <div id='category'>
        <h2>Partitions</h2>
        <h3>Ajouter une nouvelle partition</h3>
      </div>
      <Link to='/espace-membre/partitions/gestion' className='returnButton'>
          <i class="fa-solid fa-circle-up fa-rotate-270"></i>
        </Link>
      <div className='usersPage__content'>
        {/* Intégration du composant "CreateForm" */}
        <CreateForm setFile={setFile} />


        {file ?
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div
              style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '600px',
                padding: '20px 0px',
              }}
            ><Viewer fileUrl={file} />
            </div>
          </Worker>
          : null}

      </div>
    </div>
  )
}
