import React from 'react'
import './footer.scss'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='container_footer'>
      <div className="footer">
        <p>Copyright © 2023 Herilaza NJATO</p>
        <p>Accueil</p>
        <p>Compétence</p>
        <p>Apropos</p>
      </div>
    </div>
  )
}

export default Footer