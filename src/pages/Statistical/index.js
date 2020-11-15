import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiHome} from 'react-icons/fi';

// import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Forms(){
  // const history = useHistory();

  // function handleHome(e){
  //   e.preventDefault();

  //   history.push();
  // }

  return(
    <div className="form-container">
      <header>
        <img src={logoImg} alt="MularioFor"/>
        <span>Estatísticas da apuração de dados</span>
        <Link className="back-link" to="/home">
          <FiHome size={40} color="#795EFF"/>
        </Link>
      </header>
      <div className="statistic-container">
        <ol>
          <li>
            <label>O que te motivou a vir para Garça?</label>
            <p>Lazer: 2670 (89%)</p>
            <p>Negócio: 330 (11%)</p>
          </li>
          <li>
            <label>Para que você veio para Garça?</label>
            <p>Contato e contemplação da natureza: 1527 (50,9%)</p>
            <p>Desejo de aventura: 1089 (36,3%)</p>
            <p>Prática esportiva: 822 (27,4%)</p>
            <p>História, arte e cultura: 1605 (53,5%)</p>
            <p>Experiência gastronômicas: 2491 (80%)</p>
            <p>Experiências rurais: 355 (11,8%)</p>
            <p>Vida noturna: 1903 (63,4%)</p>
            <p>Bons momentos em família: 1726 (57,5%)</p>
            <p>Cachoeiras: 414 (13,8%)</p>
            <p>Aprendizado por meio de cursos: 748 (24,9%)</p>
            <p>Bem-estar/ descanço: 2115 (70,5%)</p>
            <p>Momentos românticos a dois: 1963 (65,4%)</p>
            <p>Shows e concertos: 2176 (72,5%)</p>
            <p>Encontros com amigos/parente: 2804 (93,4%)</p>
          </li>
          <li>
            <label>Está hospedado em Garça:</label>
            <p>Não: 2490 (83%)</p>
            <p>Sim: 510 (17%) Média: 3 dias</p>
          </li>
          <li>
            <label>Principal meio de hospedagem utilizado?</label>
            <p>Casa de temporada própria: 25 (5%)</p>
            <p>Casa de temporada alugada: 18 (3,5%)</p>
            <p>Hotel/pousada: 89 (17,4%)</p>
            <p>Acampamento: 3 (0,6%)</p>
            <p>Amigos/parentes: 370 (72,5%)</p>
            <p>Outro: 5 (1%)</p>
          </li>
        </ol>
      </div>
    </div>

  );
};