import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    try {
      const response = await api.post('usuarios', {nome, email, senha});
      console.log(response);

      history.push('/');

    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="MularioFor"/>
          <h1>Cadastre-se</h1>
        </section>
        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            value={nome}
            placeholder="Nome completo"
            onChange={e => setNome(e.target.value)}
          />
          <input 
            type="email" 
            value={email}
            placeholder="E-mail" 
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            type="password"
            value={senha} 
            placeholder="Senha"
            onChange={e => setSenha(e.target.value)}
          />
          <input type="password" placeholder="Confirmar senha" />
          <button className="button" type="submit">Cadastrar</button>
          <Link className="back-link" to="/">
            <FiArrowLeft size={30} color="#795EFF" />
            Já tem uma conta? Entrar
          </Link>
        </form>
      </div>
    </div>
  );
}