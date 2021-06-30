import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { useState } from 'react';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Statistical(props) {
  const [estatistica, setEstatistica] = useState([]);

  useEffect(() => {
    api.get(`/statistic/${props.match.params.id}`).then(response => {
      let ids = [];
      response.data.forEach(item => {
        if (!(ids.indexOf(item.pergunta_id) !== -1)) {
          ids.push(item.pergunta_id);
        }
      })
      let statistics = [];
      ids.forEach((id, index) => {
        statistics[index] = {
          pergunta: id,
          respostas: [],
          resposta_aaa: [],
        }
        response.data.forEach(item => {
          if (id === item.pergunta_id) {
            statistics[index].name = item.pergunta;
            statistics[index].respostas.push({
              resposta: item.resposta,
              total: 0,
            });
          }
        })
        response.data.forEach(item => {
          if (id === item.pergunta_id) {
            let sovai = {};
            statistics[index].respostas.filter(r => {
              if (sovai.hasOwnProperty(r.resposta)) {
                sovai[r.resposta] += 1;
              } else {
                sovai[r.resposta] = 1;
              }
            })
            statistics[index].resposta_aaa = sovai;
          }
        })
        statistics[index].respostas = [];
        for (let i in statistics[index].resposta_aaa) {
          let biscoito = {
            resposta: String(i),
            total: statistics[index].resposta_aaa[i],
          };
          statistics[index].respostas.push(biscoito);
        }
        delete statistics[index].resposta_aaa;
      })
      setEstatistica(statistics);
    })
  }, []);

  return (
    <div className="form-container">
      <header>
        <img src={logoImg} alt="MularioFor" />
        <span>Estatísticas da apuração de dados</span>
        <Link className="back-link" to="/home">
          <FiHome size={40} color="#795EFF" />
        </Link>
      </header>
      <div className="statistic-container">
        <ol>
          {estatistica.map((e, index) => (
            <li key={index} >
              <label>{e.name}</label>
              {e.respostas.map((r, index) => (
                <React.Fragment key={index} >
                  <p>{r.resposta}: {r.total}</p>
                </React.Fragment>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </div>

  );
};