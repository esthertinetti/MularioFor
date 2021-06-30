import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FiTrash2, FiBarChart2, FiArrowLeftCircle } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  handleLogout() {
    localStorage.clear();
    this.props.history.push('/');
  }

  handleForm() {
    api.get('home').then(response => {
      this.setState({
        list: response.data
      });
    })
  }
  componentDidMount() {
    this.handleForm();
  }

  async handleDelete(id) {
    try {
      await api.delete(`home/${id}`);

      this.handleForm();
    } catch (err) {
      alert('Erro ao deletar formulário, tente novamente');
    }

  }


  render() {

    return (
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="MularioFor" />
          <span>Bem vindo(a), {localStorage.getItem('usuario')} </span>

          <Link className="button" to="/form/new">Cadastrar novo</Link>
          <button onClick={this.handleLogout.bind(this)} type="button">
            <FiArrowLeftCircle size={40} color="#795EFF" />
          </button>
        </header>
        <h1>Formulários cadastrados</h1>
        <ul>
          {this.state.list.length <= 0
            ?
            <span>Nenhum formulario encontrado.</span>
            :
            this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  <strong>{item.title}</strong>
                  <p>Total de perguntas: {item.total}</p>
                  <p>Meta de alcance: {item.meta_alcance}</p>
                  <p>Total respondido: {item.totalRespostas}</p>
                  <div className="button-group">
                    <Link className="button" onClick={() => {
                      localStorage.setItem('total', item.meta_alcance)
                      localStorage.setItem('respondido', item.totalRespostas)
                    }} to={`/forms/${item.id}/${item.title}`} >Visualizar</Link>
                    <button 
                      type="button"
                      onClick={() => this.handleDelete(item.id)} 
                    >
                      <FiTrash2 size={40} color="#795EFF" />
                    </button>
                    <Link className="back-link" to={`/statistic/${item.id}`}>
                      <button type="button" >
                          <FiBarChart2 size={40} color="#795EFF" />
                      </button>
                    </Link>
                  </div>
                </li>
              );
            })

          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Home);