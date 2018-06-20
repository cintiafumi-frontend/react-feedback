import React from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Home from './paginas/Home/Home'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import Contato from './paginas/Contato/Contato'
import Sobre from './paginas/Sobre/Sobre'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'


let usuarios = [
  {
    id: "1ad83f55-441b-4e9e-9184-4471fd02e000",
    nome: "Aline",
    foto: "https://png.icons8.com/color/100/person-female.png",
    email: "aline@email.com",
    senha: "123123"
  },
  {
    id: "1ad83f55-441b-4e9e-9184-4471fd02e001",
    nome: "Bea",
    foto: "https://png.icons8.com/color/100/person-female.png",
    email: "bea@email.com",
    senha: "123123"
  },
  {
    id: "1ad83f55-441b-4e9e-9184-4471fd02e002",
    nome: "Camila",
    foto: "https://png.icons8.com/color/100/person-female.png",
    email: "camila@email.com",
    senha: "123123"
  },
  {
    id: "1ad83f55-441b-4e9e-9184-4471fd02e003",
    nome: "Carol",
    foto: "https://png.icons8.com/color/100/person-female.png",
    email: "carol@email.com",
    senha: "123123"
  },
  {
    id: "1ad83f55-441b-4e9e-9184-4471fd02e004",
    nome: "Celly",
    foto: "https://png.icons8.com/color/100/person-female.png",
    email: "celly@email.com",
    senha: "123123"
  },
  {
    id: "1ad83f55-441b-4e9e-9184-4471fd02e005",
    nome: "Cintia",
    foto: "https://png.icons8.com/color/100/person-female.png",
    email: "cintia@email.com",
    senha: "123123"
  },
  {
    id: "1ad83f55-441b-4e9e-9184-4471fd02e006",
    nome: "Karina",
    foto: "https://png.icons8.com/color/100/person-female.png",
    email: "karina@email.com",
    senha: "123123"
  },
  {
    id: "1ad83f55-441b-4e9e-9184-4471fd02e007",
    nome: "Mariana",
    foto: "https://png.icons8.com/color/100/person-female.png",
    email: "mari@email.com",
    senha: "123123"
  }
]

let feedbacks = []

localStorage.setItem('usuarios', JSON.stringify(usuarios))


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      usuario: localStorage.getItem('usuario') === 'undefined' ? null : JSON.parse(localStorage.getItem('usuario'))
    }

    this.logaUsuario = this.logaUsuario.bind(this)
    this.deslogaUsuario = this.deslogaUsuario.bind(this)
  }

  logaUsuario(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario))
    this.setState({ usuario: usuario })
  }

  deslogaUsuario() {
    localStorage.removeItem('usuario')
    this.setState({ usuario: null })
  }

  render() {
    return (
      <div className="app">
        <Navbar 
          usuario={this.state.usuario}
          onSairClick={this.deslogaUsuario}
        />

        <Switch>
          <Route exact path="/" render={props => (
            this.state.usuario ? <Home /> : <Redirect to="/login" />
          )} />

          <Route path="/login" render={props => (
            <Login 
              onEnviarClick={this.logaUsuario} 
              historico={props.history} 
            />
          )} />
          
          <Route path="/conta" component={Conta} />
          <Route path="/contato" component={Contato} />
          <Route path="/sobre" component={Sobre} />
          <Route component={NaoEncontrada} />
        </Switch>

      </div>
    );
  }
}

export default App