import React from 'react'
import Button from '../../general/button/Button'
import { Link } from 'react-router-dom'
import './header.scss'
type Props = {}

const Header = (props: Props) => {
  return (
    <div className='header'>
      <Button className='nav' text='Accueil' />
      <Button className='nav' text='Compétence' />
      <Button className='nav' text='Apropos' />
      <Button className='nav' text='Contact' />
    </div>
  )
}

export default Header