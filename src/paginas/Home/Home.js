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

    filtraUsuarioPorId = (id) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

        const usuario = usuarios.filter( (usuario) => {
            return usuario.id === id
        })[0]

        return usuario
    }

    selecionarUsuarios = () => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios'))
        const idUsuarioAvaliado = usuarios.map(this.id)
        const nomeUsuarioAvaliado = usuarios.map(this.nome)

        return (
            <option value={idUsuarioAvaliado}>{nomeUsuarioAvaliado}</option>
        )
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
                
                <form>
                    <select>
                        {this.selecionarUsuarios()}
                    </select>
                </form>

            </div>
        )
    }
}

export default Home