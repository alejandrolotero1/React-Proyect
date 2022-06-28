import React from 'react';

export const Logo = ({img,styleLogo}) => {;  
  return (
    <img className={styleLogo} src={img} alt="logo" />
  )
}
