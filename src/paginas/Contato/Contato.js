import React from 'react'
import GoOctoface from 'react-icons/lib/go/octoface'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import Cintia from './cintia.jpg'
import './Contato.css'


function Contato(props) {
	return (
		<div className="contato">
			<img className="contato__imagem" src={Cintia} alt="Foto de Cintia Fumi" />
			<div>
				<h2 className="contato__user">#cintiafumi <span className="contato__purple">{'{'}</span></h2>
				<p className="contato__propriedade"><a className="contato__valor" href="https://github.com/cintiafumi"><GoOctoface />: github.com/cintiafumi</a></p>
				<p className="contato__propriedade"><FaLinkedinSquare /	>: <a className="contato__valor" href="https://www.linkedin.com/in/cintiafumi/">linkedin.com/in/cintiafumi</a></p>
				<h2><span className="contato__purple">{' }'}</span></h2>
			</div>
		</div>
	)
}

export default Contato