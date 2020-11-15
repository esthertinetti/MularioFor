import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiHome} from 'react-icons/fi';
import { FormGroup, Checkbox, FormControlLabel, RadioGroup, Radio} from '@material-ui/core';
// import { RadioGroup, ReversedRadioButton, } from 'react-radio-buttons';

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
        <span>Pesquisa realizada por: Esther V. Tinetti</span>

        <Link className="back-link" to="/home">
            <FiHome size={40} color="#795EFF"/>
        </Link>
      </header>
      <form className="quest-container">
        <h1>PESQUISA DE DEMANDA TURISTICA</h1>
        <h2>+16 anos - Turista/Excursão</h2>
        <ol>
          <li>
            O que te motivou a vir para Garça? (caso "lazer" ir para 1.1)
            <RadioGroup>
              <FormControlLabel value='lazer' control={<Radio />} label="Lazer"/>
              <FormControlLabel value='negocio' control={<Radio />} label="Negócio" />
            </RadioGroup>
            <ol>
              <li>
                1 Para que você veio para Garça? (se necessário marque mais de uma)
                <FormGroup>
                  <FormControlLabel  value="natureza" control={<Checkbox />} label="Contato e contemplação da natureza" />              
                  <FormControlLabel  value="aventura" control={<Checkbox />} label="Desejo de aventura" />
                  <FormControlLabel  value="esporte" control={<Checkbox />} label="Prática esportiva" />
                  <FormControlLabel  value="historia" control={<Checkbox />} label="História, arte e cultura" />
                  <FormControlLabel  value="gastronomia" control={<Checkbox />} label="Experiência gastronômica" />
                  <FormControlLabel  value="familia" control={<Checkbox />} label="Bons momentos em família" />
                  <FormControlLabel  value="cachoeira" control={<Checkbox />} label="Cachoeiras" />
                  <FormControlLabel  value="cursos" control={<Checkbox />} label="Aprendizado por meio de cursos" />
                  <FormControlLabel  value="bem-estar" control={<Checkbox />} label="Bem estar/descanso" />
                  <FormControlLabel  value="romance" control={<Checkbox />} label="Momentos românticos a dois" />
                  <FormControlLabel  value="rural" control={<Checkbox />} label="Experiências rurais" />
                  <FormControlLabel  value="noturna" control={<Checkbox />} label="Vida nortuna" />
                  <FormControlLabel  value="shows" control={<Checkbox />} label="Shows e concertos" />
                  <FormControlLabel  value="amigos" control={<Checkbox />} label="Encontro com amigo" />
                  <FormControlLabel  value="outro" control={<Checkbox />} label={<input type="text" placeholder="Outro" />} />
                </FormGroup>
              </li>
            </ol>
          </li>
          <li>
            Está hospedado em Garça? (caso "sim" ir para 2.1)
            <RadioGroup>
              <FormControlLabel value="nao" control={<Radio />} label="Não" />
              <FormControlLabel value="sim" control={<Radio />} label="Sim" />
              <input type="number" placeholder="Quantos dias?" id="days" />
            </RadioGroup>
            <ul>
              <li>
                2.1 Principal meio de hospedagem utilizado?
                <RadioGroup>
                  <FormControlLabel value="TempProp" control={<Radio />} label="Casa de temporada própria" />
                  <FormControlLabel value="TempAlug" control={<Radio />} label="Casa de temporada alugada" />
                  <FormControlLabel value="hotel" control={<Radio />} label="Hotel/Pousada" />
                  <FormControlLabel value="acampamento" control={<Radio />} label="Acampamento" />
                  <FormControlLabel value="parente" control={<Radio />} label="Casa de amigos/parentes" />
                  <FormControlLabel value="outro" control={<Radio />} label="Outro" />
                </RadioGroup>
              </li>
            </ul>            
          </li>
          <li>
            É a primeira vez que visita Garça? (caso "não" ir para 3.1)
            <RadioGroup>
              <FormControlLabel value="sim" control={<Radio />} label="Sim" />              
              <FormControlLabel value="nao" control={<Radio />} label="Não" />
            </RadioGroup>
            <ul>
              <li>
                3.1 Aproximandamente quantas vezes já visitou Garça?
                <RadioGroup>
                  <FormControlLabel value="ate4" control={<Radio />} label="2 a 4 vezes" />              
                  <FormControlLabel value="mais5" control={<Radio />} label="mais de 5 vezes" />
                </RadioGroup>
              </li>
            </ul>
          </li>
          <li>
            Como viaja?
            <RadioGroup>
              <FormControlLabel value="sozinho" control={<Radio />} label="Sozinho" />
              <FormControlLabel value="jovem" control={<Radio />} label="Casal jovem" />
              <FormControlLabel value="maduro" control={<Radio />} label="Casal maduro" />
              <FormControlLabel value="famCrianca" control={<Radio />} label="Família com crianças" />
              <FormControlLabel value="famFilho" control={<Radio />} label="Famílias com filhos mais velhos" />
              <FormControlLabel value="amigos" control={<Radio />} label="Grupo de amigos" />
              <FormControlLabel value="profissional" control={<Radio />} label="Grupo profissional" />
              <input type="number" placeholder="Quantas pessoas?" />
            </RadioGroup>
          </li>
          <li>
            Tipo de viagem?
            <RadioGroup>
              <FormControlLabel value="agencia" control={<Radio />} label="Agenciada" />
              <FormControlLabel value="autoguiada" control={<Radio />} label="Autoguiada" />
              <FormControlLabel value="organizada" control={<Radio />} label="Organizada sem fins lucrativos (Clubes, empresas, etc)" />
            </RadioGroup>
          </li>
          <li>
            Tipo de transporte?
            <RadioGroup>
              <FormControlLabel value="proprio" control={<Radio />} label="Veículo próprio" />
              <FormControlLabel value="alugado" control={<Radio />} label="Veículo alugado" />
              <FormControlLabel value="onibus" control={<Radio />} label="Ônibus/van" />
              <FormControlLabel value="outro" control={<Radio />} label="Outro" />
            </RadioGroup>
          </li>
          <li>
            Qual foi sua fonte de informação para a preparação da viagem? (se necessário marque mais de uma)
            <FormGroup>
              <FormControlLabel value="grupo" control={<Checkbox />} label="Não preparei, estou em um grupo" />
              <FormControlLabel value="internet" control={<Checkbox />} label="Pesquisei na internet" />
              <FormControlLabel value="conhecia" control={<Checkbox />} label="Já conhecia o destino" />
              <FormControlLabel value="amigos" control={<Checkbox />} label="Amigos/parentes" />
              <FormControlLabel value="guias" control={<Checkbox />} label="Guias turísticos (impresso)" />
              <FormControlLabel value="artigos" control={<Checkbox />} label="Artigos em jornais e revistas" />
              <FormControlLabel value="outro" control={<Checkbox />} label={<input type="text" placeholder="Outro" />} />
            </FormGroup>
          </li>
          <li>
            Como você avalia os principais aspectos de Garça, sendo: 4 (bom), 3 (regular), 2 (ruim) 1 (não sei)
            <FormGroup>
                <input type="number" name="dormi" placeholder="Onde eu dormi" />
                <input type="number" name="comida" placeholder="Onde eu comi" />
                <input type="number" name="acesso" placeholder="Acessos" />
                <input type="number" name="sinalizacao" placeholder="Sinalização turística" />
                <input type="number" name="hospitalidade" placeholder="Hospitalidade" />
                <input type="number" name="informacao" placeholder="Informações turísticas disponíveis" />
            </FormGroup>
          </li>
          <li>
            Você recomendaria Garça para um amigo(a)?
            <RadioGroup>
              <FormControlLabel value="sim" control={<Radio />} label="Sim"/>
              <FormControlLabel value="nao" control={<Radio />} label="Não"/>
            </RadioGroup>
          </li>
          <li>
            Sexo:
            <RadioGroup>
              <FormControlLabel value="masculino" control={<Radio />} label="Masculino"/>
              <FormControlLabel value="feminino" control={<Radio />} label="Feminino"/>
              <FormControlLabel value="outro" control={<Radio />} label="Outro"/>
            </RadioGroup>
          </li>
          <li>
            Faixa etária:
            <RadioGroup>
              <FormControlLabel value="16-17" control={<Radio />} label="16 a 17 anos"/>
              <FormControlLabel value="18-24" control={<Radio />} label="18 a 24 anos"/>
              <FormControlLabel value="25-34" control={<Radio />} label="25 a 34 anos"/>
              <FormControlLabel value="35-44" control={<Radio />} label="35 a 44 anos"/>
              <FormControlLabel value="45-59" control={<Radio />} label="45 a 59 anos"/>
              <FormControlLabel value="+60" control={<Radio />} label="Mais de 60 anos"/>
            </RadioGroup>
          </li>
          <li>
            Cidade e estado de origem:
            <FormGroup>
              Cidade:
              <input type="text" placeholder="Cidade"/>
              Estado:
              <input type="text" placeholder="UF"/>
            </FormGroup>
          </li>
          <li>
            Qual sua renda familiar aproximada, em reais?
            <RadioGroup>
              <FormControlLabel value="1salario" control={<Radio />} label="Até 1 salário – R$ 954,00"/>
              <FormControlLabel value="3salario" control={<Radio />} label="1 a 3 salários – R$ 954,00 a R$ 2.862,00"/>
              <FormControlLabel value="5salario" control={<Radio />} label="3 a 5 salários – R$ 2.862,00 a R$ 4.770,00"/>
              <FormControlLabel value="8salario" control={<Radio />} label="acima de 5 salários – mais de R$ 4.770,00"/>
              <FormControlLabel value="10salario" control={<Radio />} label="9 a 10 salários - R$8.433,00 a 9.370,00"/>
              <FormControlLabel value="naosabe" control={<Radio />} label="Não sei"/>
              <FormControlLabel value="nao_resposta" control={<Radio />} label="Não quero responder"/>
            </RadioGroup>
          </li>
        </ol>
      </form>
      <button type="submit" >Finalizar</button>
    </div>
  );
}