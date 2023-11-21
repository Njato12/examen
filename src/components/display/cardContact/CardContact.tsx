import React, { useState } from 'react'
import './cardContact.scss'
import { TextField } from '@mui/material'
import Button from '../../general/button/Button'
import axios from 'axios'

type Props = {}

const CardContact = (props: Props) => {
  const [user, setUser] = useState({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const serviceId: string = 'service_8bgfta9'
  const templateId: string = 'template_b90lv7i'
  const publicKey: string = 'ySr4GMjV28nAh02k-'

  const data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      ...user
    }
  }

  const post = async (e: any) => {
    console.log(data);
    
    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
      console.log('succes');
      
    }
    catch (error: any) {
      console.error(`${error.message}`);
    }
  
  

   }

  return (
    <div className='wrap_cardContact'>
      <div className="input">
        <TextField onChange={handleChange} label="Nom" variant="standard" name='nom' type='text' />
        <TextField onChange={handleChange} label="Sujet" variant="standard" name='sujet' type='sujet' />
        <TextField onChange={handleChange} label="Email" variant="standard" name='email' type='email' />
      </div>
      <div className="cardMessage">
        <div className="message">
          <p>Message</p>
          <textarea onChange={handleChange} name="message" id="mess"></textarea>
        </div>
        <div className="envoye">
          <div className="button">
            <Button onClick={post} text='Envoyer' className='buttonSend' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardContact