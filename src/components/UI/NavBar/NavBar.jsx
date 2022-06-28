import React from 'react';
import { ModNav } from '../ModNav/ModNav';

export const NavBar = () => {
  return (
    <nav>
      <ModNav className="mod-nav" reference="/" text="Home" />
      <ModNav className="mod-nav" reference="/about" text="About" />
      <ModNav className="mod-nav" reference="/contact" text="Contact" />
    </nav>
  )
}
