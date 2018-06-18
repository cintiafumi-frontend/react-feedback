import React from 'react'
import './Feedback.css'

class Feedback extends React.Component {
    render() {
        return (
            <aticle className="feedback">
                <div className="feedback__user">
                    <img className="feedback__img" src={this.props.de.foto} alt={this.props.de.nome} />
                    <p className="feedback__titulo">{this.props.de.nome}</p>
                </div>
                <p className="feedback__texto">{this.props.texto}</p>
            </aticle>
        )
    }
}

export default Feedback