import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



export default function Footer() {

  const location = useLocation();
  const [isPanelRoute, setIsPanelRoute] = useState(false);

  useEffect(() => {
    setIsPanelRoute(location.pathname.startsWith('/espace-membre'));
    console.log(location.pathname.startsWith('/espace-membre'));
  }, [location.pathname]);

  return (
    <footer className={isPanelRoute ? "footer usersFooter" : "footer" }>
      <div className='footer__logoContainer'>
        <img src={require('./../../assets/logo.png')} className='footer__logoContainer__logo' />
        <h1 className='footer__logoContainer__title'>La Concordia</h1>
      </div>
      <div className='footer__socialMediasContainer'>
        <div className='footer__socialMediasContainer__edmIns'>
          <i className="fa-brands fa-instagram" />
          <Link to='#' className='footer__socialMediasContainer__link'>Ecole de musique</Link>
        </div>
        <div className='footer__socialMediasContainer__harFb'>
          <i className="fa-brands fa-facebook" />
          <Link to='#' className='footer__socialMediasContainer__link'>Harmonie</Link>
        </div>
        <div className='footer__socialMediasContainer__harIns'>
          <i className="fa-brands fa-instagram" />
          <Link to='#' className='footer__socialMediasContainer__link'>Harmonie</Link>
        </div>
      </div>
      <div className='footer__cguContainer'>
        <div className='footer__cguContainer__legalNotice'>
          <i className="fa-regular fa-copyright" />
          <p>La Concordia - Tous droits réservés - 2023</p>
        </div>
        <Link to='#' className='footer__cguContainer__cgu link'>CGU</Link>
      </div>
    </footer>
  )
}