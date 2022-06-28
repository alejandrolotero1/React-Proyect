import React from 'react'

export const ModNav = ({style, reference, text}) => {
  return (
    <a className={style} href={reference}>{text}</a>
  )
}
