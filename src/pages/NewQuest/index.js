import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup } from '@material-ui/core';
import {FiHome, FiCheckSquare, FiPlus, FiMinus, FiCheckCircle} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewForms(){
  const history = useHistory();

  const [inputList, setInputList] = useState([
    { 
      question: '',
      check: false,
      checklist: [], 
      radiolist: [] 
    }
  ]);

  const [ title, setTitle ] = useState('');
  const [ metaAlcance, setMetaAlcance ] = useState('');
  const [ colaboradores, setColaboradores ] = useState('');

  function addNewInput() {
    setInputList([
      ...inputList,
      { 
        question: '',
        check: false, 
        checklist: [], 
        radiolist: [] 
      }
    ]);
    inputList.push();
  }

  function removeInput() {
    const l = [...inputList];
    if(l.length > 1) {
      l.pop();
      setInputList(l);
    }
  }

  function addNewCheck(position) {
    const a = inputList.map((item, index) => {
      if(position === index) {
        return {...item, check: true, radiolist: [], checklist: [...item.checklist, { name: '' }] }
      }
      return item;
    });
    setInputList(a);
  }

  function addNewRadio(position) {
    const a = inputList.map((item, index) => {
      if(position === index) {
        return {...item, check: false, checklist: [], radiolist: [...item.radiolist, { name: '' }] }
      }
      return item;
    });
    setInputList(a);
  }

  function setInputListValue(position, field, value) {
    const a = inputList.map((item, index) => {
      if(position === index) {
        return {...item, [field]: value }
      }
      return item;
    });
    setInputList(a);
  }

  function changeInputRadioOrCheck(position, position1, field, value) {
    const a = inputList.map((item, index) => {
      if(position === index) {
        item[field][position1] = value;
        return {...item };
      }
      return item;
    });
    setInputList(a);
  }

  function handleCreateForm() {
    const params = {
      title,
      metaAlcance,
      colaboradores,
      ...inputList
    };
    console.log(params);
  }

  return(
    <div className="form-container">
      <header>
        <img src={logoImg} alt="MularioFor"/>
        <span>Cadastro de novo questionário</span>
        <Link className="back-link" to="/home">
            <FiHome size={40} color="#795EFF"/>
        </Link>
      </header>

      <main>
        <form className="newForm-container" >
          <div className="label-group">
            <label>Informe a meta que deseja alcançar</label>
            <input 
              value={metaAlcance}
              type="number" 
              name="meta" 
              placeholder="Digite o total da meta de entrevistado"
              onChange={e => setMetaAlcance(e.target.value)}
            />
          </div>
          <div className="label-group">
            <label>Informe o email dos colaboradores</label>
            <input 
              type="email" 
              name="emails" 
              onChange={e => setColaboradores(e.target.value)}
              placeholder="Digite o e-mail dos entrevistadores colaboradores"
            />
          </div>
          <div className="label-group">
            <label>Título do formulário</label>
            <input 
              name="title"
              type="text" 
              value={title}
              placeholder="Digite o título do formulário"
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <fieldset>
            {inputList.map((inputList, i) => {
              return (
                <div className="input-list" key={i}>
                  <input 
                    name="question"
                    type="text" 
                    placeholder="Digite a pergunta"
                    value={inputList.question}
                    onChange={e => setInputListValue(i, 'question', e.target.value)}            
                  />
                  <button type="button" onClick={addNewInput}>
                    <FiPlus />
                  </button>
                  <button type="button" onClick={removeInput}>
                    <FiMinus />
                  </button>
                  <button type="button" onClick={() => addNewCheck(i)}>
                    <FiCheckSquare />
                  </button>
                  <button type="button" onClick={() => addNewRadio(i)}>
                    <FiCheckCircle />
                  </button>
                  {inputList.check && inputList.checklist.map((checkboxList, j) => {
                    return (
                      <div className="checkbox-list" key={j}>
                        <FormGroup>
                          <FormControlLabel 
                            value={false} 
                            control={<Checkbox />}
                            label={
                              <input type="text" placeholder="Opção" onChange={e => changeInputRadioOrCheck(i, j, 'checklist', e.target.value) } /> 
                            }
                          />
                        </FormGroup>
                      </div>
                    );
                  })}
                  {!inputList.check && inputList.radiolist.map((radioList, k) => {
                    return (
                      <div className="radio-list" key={k}>
                        <RadioGroup>
                          <FormControlLabel 
                            value={false} 
                            control={<Radio />} 
                            label={
                              <input type="text" placeholder="Opção" onChange={e => changeInputRadioOrCheck(i, k, 'radiolist', e.target.value) } /> 
                            }
                          />
                        </RadioGroup>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </fieldset>
        </form>
        <button type="button" onClick={() => handleCreateForm()}>Cadastrar formulário</button>
      </main>
    </div>
  );
}