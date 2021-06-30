import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import api from  '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try {
      const response = await api.post('login', {email, senha});
      localStorage.setItem('user', true);
      localStorage.setItem('usuario', response.data.nome);
      localStorage.setItem('usuarioID', response.data.id_usuario);
      history.push('/home');

    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }
  return (
    <div className="login-container">
      <img src={logoImg} alt="MularioFor"/>
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input 
            type="email" 
            value={email}
            placeholder="Seu e-mail" 
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            value={senha}
            placeholder="Sua senha" 
            onChange={e => setSenha(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
            <FiArrowRight size={20} color="#795EFF" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
    </div>
  );
}