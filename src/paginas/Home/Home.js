import React from 'react'
import Loading from '../../componentes/Loading/Loading'
import Feedback from '../../componentes/Feedback/Feedback'
import * as apiUsuarios from '../../apis/usuarios'
import * as apiFeedbacks from '../../apis/feedbacks'
import './Home.css'


class Home extends React.Component {
    state = {
        feedbacks: [],
        carregando: true
    }

    componentDidMount () {
        const feedbacksDoUsuarioLogado = apiFeedbacks.getFeedbacksDoUsuarioLogado()
        
        setTimeout(() => {
            this.setState({ 
                feedbacks: feedbacksDoUsuarioLogado,
                carregando: false 
            })
        }, 3000)
    }

    handleFeedbackSubmit = e => {
        e.preventDefault()
        
        const feedback = {
            idPara: this.state.idPara,
            texto: this.state.texto
        }
        console.log('idPara', feedback.idPara)
        console.log('texto', feedback.texto)

        apiFeedbacks.putFeedback(feedback)
        console.log('feedback', feedback)
        console.log('this', this)
        // Faltava limpar o state para poder limpar os valores do formulário
        this.setState({ feedbacks: this.state.feedbacks.concat(feedback), idPara: '', texto: '' })
        // Alerta avisando que foi enviado com sucesso
        alert('Feedback enviado com successo!')
        console.log('this.state handleFeedbackSubmit', this.state)
    } 

    handleFeedbackChange = e => {
        const value = e.target.value
        const name = e.target.name

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="home">
                {this.state.carregando ? (
                    <Loading />
                ) : (
                    <div>
                        <form onSubmit={this.handleFeedbackSubmit}>
                            {/* Faltava o atributo value pegando do state */}
                            
                            <select name="idPara" value={this.state.idPara} onChange={this.handleFeedbackChange}>
                                <option value="disable">Selecione para quem quer enviar o feedback</option>
                                {apiUsuarios.getUsuariosNaoLogados().map(usuario => (
                                    <option value={usuario.id}>{usuario.nome}</option>
                                ))}
                            </select>

                            <textarea name="texto" value={this.state.texto} onChange={this.handleFeedbackChange} />
                            
                            <button>Enviar feedback</button>
                        </form>

                        <div className="feedbacks">
                            <h2>Feedbacks recebidos</h2>

                            {/* {this.state.feedbacks.filter(feedback => (
                                <Feedback
                                    key={feedback.idDe + feedback.idPara}
                                    de={apiUsuarios.getUsuarioPorId(feedback.idDe)}
                                    texto={feedback.texto}
                                />
                            ))} */}
                        </div>

                        <div className="feedbacks">
                            <h2>Feedbacks enviados</h2>
                            
                            {this.state.feedbacks.map(feedback => (
                                <Feedback 
                                    key={feedback.idDe + feedback.idPara}
                                    de={apiUsuarios.getUsuarioPorId(feedback.idPara)}
                                    texto={feedback.texto}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Home