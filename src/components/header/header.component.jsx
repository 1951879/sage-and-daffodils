import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to="/">DAFFODIL</Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        (<div class='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
        :
        (<Link class='option' to='/signin'>SIGN IN</Link>)
      }
    </div>
  </div>
)

export default Header;