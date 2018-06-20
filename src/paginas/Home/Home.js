import React from 'react'
import Loading from '../../componentes/Loading/Loading'
import Feedback from '../../componentes/Feedback/Feedback'
import * as apiUsuarios from '../../apis/usuarios'
import * as apiFeedbacks from '../../apis/feedbacks'
import './Home.css'


class Home extends React.Component {
	state = {
		feedbacks: [],
		carregando: true,
		idLogado: JSON.parse(localStorage.getItem('usuario')).id
	}

	componentDidMount() {
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
			texto: this.state.texto,
			idDe: this.state.idLogado
		}

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
		const recebidos = this.state.feedbacks.filter(feedback =>
			(feedback.idPara === this.state.idLogado)).map(feedback =>

				<Feedback
					key={feedback.idDe + feedback.idPara}
					de={apiUsuarios.getUsuarioPorId(feedback.idDe)}
					texto={feedback.texto}
				/>

			)

		const enviados = this.state.feedbacks.filter(feedback =>
			(feedback.idDe === this.state.idLogado)).map(feedback =>
				<Feedback
					key={feedback.idDe + feedback.idPara}
					de={apiUsuarios.getUsuarioPorId(feedback.idPara)}
					texto={feedback.texto}
				/>
			)

		return (
			<div className="home">
				{this.state.carregando ? (
					<Loading />
				) : (
						<div>
							<form className="home__busca" onSubmit={this.handleFeedbackSubmit}>
								{/* Faltava o atributo value pegando do state */}

								<select name="idPara" value={this.state.idPara} onChange={this.handleFeedbackChange}>
									<option value="disable">Selecione a amiga...</option>
									{apiUsuarios.getUsuariosNaoLogados().map(usuario => (
										<option value={usuario.id}>{usuario.nome}</option>
									))}
								</select>

								<textarea name="texto" placeholder="Escreva seu feedback aqui..." value={this.state.texto} onChange={this.handleFeedbackChange} />

								<button>Enviar feedback</button>
							</form>

							<div className="home__section">
								<h2>Feedbacks recebidos</h2>
								<div className="feedbacks">
									{recebidos.length === 0 ? <p>Vc não recebeu nenhum feedback.</p> : recebidos}
								</div>
							</div>

							<div className="home__section">
								<h2>Feedbacks enviados</h2>
								<div className="feedbacks">
									{enviados.length === 0 ? <p>Vc não enviou nenhum feedback.</p> : enviados}
								</div>
							</div>
						</div>
					)}
			</div>
		)
	}
}

export default Home