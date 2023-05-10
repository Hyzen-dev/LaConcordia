import React from 'react';
import { Link } from 'react-router-dom';


export default function HeaderUsers(props) {
  const { user, allMessages } = props;

  const hasUnread = allMessages.filter(message => message.isRead === false);

  return (
    <header className='headerUsers'>
      <div className='headerUsers__icons'>
        <Link to='espace-membre/notifications'>
          <i className="fa-solid fa-comment link"></i>
        </Link>
        <Link to='espace-membre/messages'>
          {hasUnread.length > 0 ?
            <i data-count={hasUnread.length} className="fa-solid fa-envelope link unread"></i>
            :
            <i className="fa-solid fa-envelope link"></i>
          }
        </Link>
      </div>
      <h2 className='headerUsers__title'>Bienvenue {user.firstName} {user.lastName}</h2>
    </header>
  )
}