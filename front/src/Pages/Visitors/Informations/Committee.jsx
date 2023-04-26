import React from 'react';
import { Helmet } from 'react-helmet';
import StatusDatas from '../../../data/Status';
import UsersDatas from './../../../data/Users';

// Page Committee, qui permet l'affichage des membres de la commission.

export default function Committee() {
  return (
    <div>
      <Helmet><title>La Concordia - Commission</title></Helmet>

      <div id='category'>
        <h2>Commission</h2>
        <h3>Effectif actuel</h3>
      </div>

      <div className='committee pagePattern'>

        {/* Les données "StatusDatas" sont mappées afin d'afficher les labels des status dont le type est "Committee". Pour chacun de ces labels, les membres ayant ce status sont affichés grace à l'utilisation de la fonction ".map" sur les données "UsersDatas". */}
        {StatusDatas.map((status) => {
          if (status.type === 'Committee') {
            return (
              <div key={status.id}>
                <h3 className='pagePattern__subheading'>{status.label}</h3>
                <div className='separator'></div>
                {UsersDatas.map((user) => {
                  if (user.status.includes(status)) {
                    return (
                      <div key={user.id}>
                        <p>{user.firstName} {user.lastName}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}