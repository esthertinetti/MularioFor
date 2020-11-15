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
    { question: '', checkbox:''}
  ]);
  const [checkboxList, setCheckboxList] = useState([
    {checkbox: '', label: '' }
  ]);
  const[radioList, setRadioList] = useState([
    { radio: '', label: ''}
  ]);

  const [title, setTitle] = useState('');

  function addNewInput() {
    setInputList([
      ...inputList,
      {
        question: '',
        checkbox: ''
      }
    ])
    inputList.push()
  }

  function addNewCheck() {
    setCheckboxList([
      ...checkboxList,
      { checkbox: '', label: '', }
    ])
    checkboxList.push();
  }

  function addNewRadio() {
    setRadioList([
      ...radioList,
      { radio: '', label: '', }
    ])
    radioList.push();
  }

  function removeInput() {
    const list = [...inputList];
    list.pop();
    setInputList(list);
  }

  function setInputListValue(position, field, value) {
    console.log(inputList[position])
    const updateInputList = inputList.map((inputList, index) => {
      if(index === position) {
        return{...inputList, [field]: value};
      }

      return inputList;
    });
    setInputList(updateInputList);
  }

  function handleCreateForm(e) {
    e.preventDefault();

    api.post('nomedatabela', {
      title,
      form: inputList,
    }).then(() => {
      alert('Cadastrado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro!');
    })
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
        <form onSubmit={handleCreateForm} className="newForm-container" >
          <div className="label-group">
            <label>Informe a meta que deseja alcançar</label>
            <input type="number" name="meta" placeholder="Digite o total da meta de entrevistado"/>
          </div>
          <div className="label-group">
            <label>Informe o email dos colaboradores</label>
            <input type="email" name="emails" placeholder="Digite o e-mail dos entrevistadores colaboradores"/>
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
            {inputList.map((inputList, index) => {
              return (
                <div className="input-list">
                  <input 
                    name="question"
                    type="text" 
                    placeholder="Digite a pergunta"
                    value={inputList.question}
                    onChange={e => setInputListValue(index, 'question', e.target.value)}            
                  />
                  <button type="button" onClick={addNewInput}>
                    <FiPlus />
                  </button>
                  <button type="button" onClick={removeInput}>
                    <FiMinus />
                  </button>
                  <button type="button" onClick={addNewCheck}>
                    <FiCheckSquare />
                  </button>
                  <button type="button" onClick={addNewRadio}>
                    <FiCheckCircle />
                  </button>
                  {checkboxList.map((checkboxList, index) => {
                    return (
                      <div className="checkbox-list">
                        <FormGroup>
                          <FormControlLabel 
                            value={checkboxList.checkbox} 
                            control={<Checkbox />}
                            label={<input type="text" placeholder="Opção" 
                            onChange={e => setInputListValue(index, 'checkbox', e.target.value) } /> }
                          />
                        </FormGroup>
                      </div>
                    );
                  })}
                  {radioList.map((radioList, index) => {
                    return (
                      <div className="radio-list">
                        <RadioGroup>
                          <FormControlLabel 
                            value={radioList.radio} 
                            control={<Radio />} 
                            label={<input type="text" placeholder="Opção" 
                            onChange={e => setInputListValue(index, 'radio', e.target.value) } /> }
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
        <button type="submit">Cadastrar formulário</button>
      </main>
    </div>
  );
}