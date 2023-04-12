import { NavLink } from 'react-router-dom';

export default function Navbar() {

  





  return (
    <nav className='navbar'>
      <div className='logoContainer'>
        <img src={require('./../../assets/logo.png')} className='logoContainer__img' />
        <h1 className='logoContainer__title'>La Concordia</h1>
      </div>

      <ul className='navList'>

        <li className='navList__item'>
          <NavLink to={'/'} className='navList__link'>Accueil</NavLink>
        </li>

        <li className='navList__item'>Informations
          <ul className='navList__item__informationsList'>
            <li className='navList__item__informationsList__item'>
              <NavLink to={'/informations/harmonie-clique'} className='navList__item__informationsList__link'>
                Harmonie & Clique
              </NavLink>
            </li>
            <li className='navList__item__informationsList__item'>
              <NavLink to={'/informations/ecole-de-musique'} className='navList__item__informationsList__link'>
                École de musique
              </NavLink>
            </li>
            <li className='navList__item__informationsList__item'>
              <NavLink to={'/informations/commission'} className='navList__item__informationsList__link'>
                Commission
              </NavLink>
            </li>
          </ul>
        </li>

        <li className='navList__item'>
          <NavLink to={'/contact'} className='navList__link'>Contact</NavLink>
        </li>

        <li className='navList__item'>
          <NavLink to={'/inscription'} className='navList__link'>Espace Membre</NavLink>
        </li>
        
      </ul>
    </nav>
  )
}