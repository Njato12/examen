import React, { useState } from 'react'
import './cardContact.scss'
import { TextField } from '@mui/material'
import Button from '../../general/button/Button'

type Props = {}

const CardContact = (props: Props) => {
  const [user, setUser] = useState({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }
  return (
    <div className='wrap_cardContact'>
      <div className="input">
        <TextField onChange={handleChange} label="Nom" variant="standard" name='nom' type='text' />
        <TextField onChange={handleChange} label="Prenom" variant="standard" name='prenom' type='text' />
        <TextField onChange={handleChange} label="Sujet" variant="standard" name='sujet' type='sujet' />
      </div>
      <div className="cardMessage">
        <div className="message">
          <p>Message</p>
          <textarea name="message" id="mess"></textarea>
        </div>
        <div className="envoye">
          <div className="button">
            <Button text='Envoyer' className='buttonSend' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardContact