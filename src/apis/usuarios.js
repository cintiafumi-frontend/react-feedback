export function getUsuarioLogado() {
    const usuario = JSON.parse(
        localStorage.getItem('usuario') || '{}'
    )
    
    return usuario
}


export function getUsuariosNaoLogados() {
    const usuarioLogado = getUsuarioLogado()
    const usuarios = getTodosUsuarios()

    const filtrados = usuarios.filter(
        usuario => usuario.id !== usuarioLogado.id
    )

    return filtrados
}


export function getTodosUsuarios() {
    const usuarios = JSON.parse(
        localStorage.getItem('usuarios') || '[]'
    )

    return usuarios;
}


export function getUsuarioPorId(id) {
    console.log('id', id)
    const usuarios = getTodosUsuarios()

    const filtrados =  usuarios.filter(
        usuario => usuario.id === id
    )

    return filtrados[0]
}


export function postUsuario(usuario) {
        const email = usuario.email
        const senha = usuario.senha
        const usuarios = getTodosUsuarios();

        const filtrados = usuarios.filter(
            usuario => usuario.email === email && usuario.senha === senha
        )
        
        return filtrados[0]
}