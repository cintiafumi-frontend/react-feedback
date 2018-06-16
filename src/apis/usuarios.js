export function postUsuario(usuario) {
    return new Promise( (resolve, rejct) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

        const usuarioLogado = usuarios.filter(itemDaLista => (
            usuario.email === itemDaLista.email &&
            usuario.senha === itemDaLista.senha
        ))
        

        
        resolve(usuarioLogado[0])
    })
}