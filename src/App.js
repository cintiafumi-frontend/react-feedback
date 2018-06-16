import React from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Home from './paginas/Home/Home'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import Contato from './paginas/Contato/Contato'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'


const usuarios = [
  {
    id: "1ad83f55-441b-4e9e-9184-4471fd02e042",
    nome: "Cintia",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGlEWxrPneKIrW9pyiitAS_5GIO_HRAlaAvpa-EYKaQWFwHUX0Q",
    email: "cintia@email.com",
    senha: "123123"
  },
  {
    id: "1ad83f55-441b-4e9e-9184-4471fd02e041",
    nome: "Camila",
    foto: "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    email: "camila@email.com",
    senha: "123123"
  },
  {
    id: "1ad83f55-441b-4e9e-9184-4471fd02e040",
    nome: "Karina Maria",
    foto: "https://i1.wp.com/smashingdownloads.com/uploads/195/stunning-cute-wallpaper-image-for-baby-kitten-ideas-and-sleeping-trend.jpg?quality=80&strip=all&resize=100,100",
    email: "karina@email.com",
    senha: "123123"
  }
]

const feedbacks = [
  {
    idDe: "1ad83f55-441b-4e9e-9184-4471fd02e042",
    idPara: "1ad83f55-441b-4e9e-9184-4471fd02e041",
    data: new Date(),
    texto: "A Camila é incrível. Comeu todo o cookie da Aline."
  },
  {
    idDe: "1ad83f55-441b-4e9e-9184-4471fd02e042",
    idPara: "1ad83f55-441b-4e9e-9184-4471fd02e040",
    data: new Date(),
    texto: "Karina Maria fez o M de Maria."
  },

]

localStorage.setItem('usuarios', JSON.stringify(usuarios))
localStorage.setItem('feedbacks', JSON.stringify(feedbacks))

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      usuario: JSON.parse(localStorage.getItem('usuario'))
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
          <Route path="/quem-somos" component={QuemSomos} />
          <Route component={NaoEncontrada} />
        </Switch>
      </div>
    );
  }
}

export default App