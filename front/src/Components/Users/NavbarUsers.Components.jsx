import React from 'react'

export default function NavbarUsers() {
  return (
    <nav id='navbarUsers'>
      <ul className='usersNavList'>
        <li>Profil</li>

        <li>Partitions
          <ul className='usersNavList__subheading'>
            <li>Mes partitions</li>
            <li>Gérer les partitions</li>
            <li>Créer une partitions</li>
          </ul>
        </li>

        <li>Evenements
          <ul className='usersNavList__subheading'>
            <li>Gérer les évènements</li>
            <li>Créer un évènement</li>
          </ul>
        </li>

        <li>Médias
          <ul className='usersNavList__subheading'>
            <li>Gérer les médias</li>
            <li>Créer un médias</li>
          </ul>
        </li>

        <li>Actualités
          <ul className='usersNavList__subheading'>
            <li>Gérer les actualités</li>
            <li>Créer une actualité</li>
          </ul>
        </li>

        <li>Gérer les utilisateurs</li>
      </ul>
    </nav>
  )
}
