import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { FormGroup, Checkbox, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Forms(props) {

  const [list, setList] = useState([]);
  const [respostas, setRespostas] = useState([]);

  const history = useHistory();


 useEffect(() => {
    api.get(`/form/${props.match.params.id}`).then(response => {
      setList(response.data);

      let respostas = [];

      response.data.forEach(item => {
        const resposta = {
          pergunta: item.pergunta,
          opcoes: [],
          id: item.id_pergunta,
          radio: item.radio,
        };

        item.opcao.forEach((op, index) => {
          resposta.opcoes.push({
            label: op,
            value: false,
          })
        })

        respostas.push(resposta);
      });
      setRespostas(respostas);
    })
  }, []);
 

  function onChange(value, i, j) {
    const a = respostas.map((item, index) => {
      if(i === index) {
        item.radio && item.opcoes.map(op => {
          return op.value = false;
        }) 

        item.opcoes[j].value = value;
        return {...item };

      }

      return item;
    });

    setRespostas(a);
  };

  function Submit(){
    const total = localStorage.getItem('total');
    const respondido = localStorage.getItem('respondido');
    
    if(Number(respondido) < Number(total)) {
      api.post(`answers/${props.match.params.id}`, respostas).then(() => {
        history.push('/home');
      }).catch(() => {
        alert('Não foi possivel finalizar a operação.');
      });
    } else {
      alert('Meta alcançada!');
    }


  };

  return (
    <div className="form-container">
      <header>
        <img src={logoImg} alt="MularioFor" />
        <span>Pesquisa realizada por: {localStorage.getItem('usuario')} </span>

        <Link className="back-link" to="/home">
          <FiHome size={40} color="#795EFF" />
        </Link>
      </header>
      <form className="quest-container">
        <h1>{props.match.params.name}</h1>
        <ol>
          {list.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                {item.pergunta}
                {item.radio ? <RadioGroup>
                  {item?.opcao.map((op, i) => (
                    <FormControlLabel 
                      key={i} 
                      checked={respostas[index]?.opcoes[i].value} 
                      control={<Radio />} 
                      label={op} 
                      onChange={event => onChange(event.target.checked, index, i) }
                    />
                  ))}
                </RadioGroup> 
                : 
                <FormGroup>
                {item?.opcao.map((op, i) => (
                  <FormControlLabel 
                    key={i} 
                    value={respostas[index]?.opcoes[i].value} 
                    control={<Checkbox />} 
                    label={op} 
                    onChange={event => onChange(event.target.checked, index, i) }
                  />
                    ))}
                  </FormGroup>
                }
              </li>
            </React.Fragment>
          ))}
        </ol>
      </form>
      <button 
        type="submit"
        onClick={() => Submit()}
      >Finalizar</button>
    </div>
  );
}