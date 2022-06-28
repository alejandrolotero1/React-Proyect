import React from 'react';
import { NavBar } from '../../UI/NavBar/NavBar';
import { Logo } from '../../UI/Logo/Logo';
import logoIMg from '../../../Images/bike.jpg';

export const Header = () => {
  return (
    <header>
      <Logo img={logoIMg} styleLogo="img-logo" />
      <h1>Mi primera página</h1>
      <NavBar />
    </header>
    
  )
}
