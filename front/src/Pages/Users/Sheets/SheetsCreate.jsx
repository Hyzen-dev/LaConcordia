import React from 'react';
import { Helmet } from 'react-helmet';
import CreateForm from '../../../Components/Forms/CreateForm.Component';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import file from './../../../assets/test.pdf'
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


// Page SheetsCreate qui affiche le formulaire de création d'une nouvelle partition.

export default function SheetsCreate() {
  return (
    <div>
      <Helmet><title>La Concordia - Partitions</title></Helmet>

      <div className='usersPage'>
        <div id='category'>
          <h2>Partitions</h2>
          <h3>Ajouter une nouvelle partition</h3>
        </div>
        <div className='pagePattern'>
          {/* Intégration du composant "CreateForm" */}
          <CreateForm />


          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div
              style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '600px',
                padding: '20px 0px',
              }}
            >
            <Viewer fileUrl={file} />
            </div>
          </Worker>


        </div>
      </div>
    </div>
  )
}
