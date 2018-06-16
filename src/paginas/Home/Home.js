import React from 'react'
import Postit from '../../componentes/Postit/Postit'
import Loading from '../../componentes/Loading/Loading'
import loading from './loading.svg'
import * as apiPostit from '../../apis/postits'
import './Home.css'


class Home extends React.Component {
    state = {
        feedbacks: [],
        carregando: true
    }

    componentDidMount () {
        const usuarioLogado = JSON.parse(localStorage.getItem('usuario')) || {}
        const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || []
        const feedbacksUsuarioLogado = feedbacks.filter(feedback => {
            return feedback.idPara === usuarioLogado.id
        })
        this.setState({ feedbacks: feedbacksUsuarioLogado})

        setTimeout( () => {
            this.setState({ carregando: false })
        },3000)
    }

    handleEnviarFeedback = (e) => {
        e.preventDefault()
        const usuarioLogado = JSON.parse(localStorage.getItem('usuario')) || {}
        const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || []
        const feedback = {
            idDe: usuarioLogado.id,
            idPara: this.state.idPara,
            texto: this.state.texto,
            data: new Date(),
        }
        feedbacks.push(feedback)
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks))
    } 

    handleFeedbackChange = (e) => {

        const value = e.target.value
        const name = e.target.name
        this.setState({
            [name]: value
        })
    }

    filtraUsuarioPorId = (id) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

        const usuario = usuarios.filter( (usuario) => {
            return usuario.id === id
        })[0]

        return usuario
    }

    listaUsuarios = () => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
        return usuarios
    }

    render() {
        return (
            <div className="home">
                {
                    this.state.carregando ? (
                        <Loading />
                    ) : (
                        this.state.feedbacks.map(feedback => (
                            <Postit 
                                key={feedback.idDe + feedback.idPara}
                                de={this.filtraUsuarioPorId(feedback.idDe)}
                                texto={feedback.texto}
                            />
                        ))
                    )
                }

                <form onSubmit={this.handleEnviarFeedback}>
                
                    <select name="idPara" onChange={this.handleFeedbackChange}>
                        {this.listaUsuarios().map(usuario => (
                            <option value={usuario.id}>{usuario.nome}</option>
                        ))}
                    </select>
                    <textarea name="texto"  onChange={this.handleFeedbackChange} />
                    <button>Enviar feedback</button>
                </form>
            </div>
        )
    }
}

export default Home