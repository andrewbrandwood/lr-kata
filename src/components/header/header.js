import React from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import './header.scss';

class Header extends React.Component {
  render(){
    return (
      <header className="header">
        <span className="header__logo"><Logo className="header__logo-image" alt="Laterooms" /></span>
        <h1 className="header__title">Laterooms Frontend Kata</h1>
      </header>
    )
  };
}

export default Header;
