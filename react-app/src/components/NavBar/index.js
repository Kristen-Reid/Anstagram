import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import ProfileButton from './ProfileButton';
import { ReactComponent as House } from '../../svgImg/homeIcon.svg';
import PostFormModal from '../PostFormModal';
import '../NavBar/navbar.css';

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-box'>
        <div className='logo-nav'>
          <h2>Anstagram</h2>
        </div>
        <div className='nav-icons'>
          <div className='nav-div'>
            <li>
              <NavLink to='/home' exact={true} activeClassName='active'>
                <House />
              </NavLink>
            </li>
        </div>
        <div className='nav-div'>
            <li>
                <PostFormModal />
            </li>
          </div>
          <div className='nav-div'>
            <li>
              <LogoutButton />
            </li>
          </div>
        </div>
        </div>
    </div>
  );
}

export default NavBar;
