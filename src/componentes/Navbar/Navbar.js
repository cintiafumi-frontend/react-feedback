import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu/Menu'
import './Navbar.css'


function Navbar(props) {
	return (
		<nav className="navbar">
			<Link to="/react-feedback">
				<span className="navbar__logo">{'{ feed'}</span>back
        <span className="navbar__logo">{' }'}</span>
			</Link>

			<Menu usuario={props.usuario} onSairClick={props.onSairClick} />
		</nav>
	)
}

export default Navbar