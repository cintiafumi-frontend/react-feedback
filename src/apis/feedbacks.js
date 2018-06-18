import * as apiUsuarios from './usuarios'


export function getTodosFeedbacks() {
    const usuarios = JSON.parse(
        localStorage.getItem('feedbacks') || '[]'
    )

    return usuarios;
}


export function getFeedbacksDoUsuarioLogado() {
    const usuarioLogado = apiUsuarios.getUsuarioLogado()
    const feedbacks = getTodosFeedbacks()

    const filtrados =  feedbacks.filter(
        feedback => (feedback.idPara === usuarioLogado.id || feedback.idDe === usuarioLogado.id)
    )

    return filtrados
}


export function putFeedback(feedback) {
    const usuarioLogado = apiUsuarios.getUsuarioLogado()
    const feedbacks = getTodosFeedbacks()

    feedback.id = usuarioLogado.id
    feedback.data = new Date()

    feedbacks.push(feedback)
    
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks))
}