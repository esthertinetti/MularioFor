import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FiTrash2, FiBarChart2, FiArrowLeftCircle } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

class Home extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  handleLogout(){
    localStorage.clear();
    this.props.history.push('/');

  }

  render () {

    return(
      <div className="profile-container">
      <header>
        <img src={logoImg} alt="MularioFor"/>
        <span>Bem vindo(a), {localStorage.getItem('usuario')} </span>

        <Link className="button" to="/form/new">Cadastrar novo</Link>
        <button onClick={this.handleLogout.bind(this)} type="button">
          <FiArrowLeftCircle size={40} color="#795EFF"/>
        </button>
      </header>
      <h1>Formulários cadastrados</h1>
      <ul> 
        {this.state.list.length <= 0
         ? 
         <span>AAAAAAAAA</span>
          :
        <li>
          <strong>PESQUISA DE DEMANDA TURISTICA - JAPAN FEST (2020)</strong>
          <p>Total de perguntas: 28</p>
          <p>Meta de alcance: 3500</p>
          <p>Total respondido: 3000</p>
          <div className="button-group">
            <Link className="button" to="/forms">Visualizar</Link>
            <button type="button"><FiTrash2 size={40} color="#795EFF" /></button>   
            <Link className="back-link" to="/statistics">
              <button type="button"><FiBarChart2 size={40} color="#795EFF" /></button>
            </Link>
          </div>
        </li>
        }
      </ul>
    </div>
  );
}
}

export default withRouter(Home);