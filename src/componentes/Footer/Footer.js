import React from 'react'
import Logo from './logo-reprograma-branco.png'
import './Footer.css'

function Footer(props) {
  return (
    <div className="footer">
      <small>Feito por cintiafumi {'{turma 5}'}</small>
      <img src={Logo} alt="logo Reprograma" />
    </div>
  )
}

export default Footer