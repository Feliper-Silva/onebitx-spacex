import logoImg from '../../assets/logoOneBitDark.png';
import { Button } from '../Button';

import './styles.scss';

export const Form = () => {
  return (
    <div className="container px-4 " id="formBody">
      <div className="text-center">
        <img
          src={logoImg}
          alt="Logo tipo OnebitCode"
          className="img-fluid mt-4 mb-3 topLogo"
        />
      </div>
      <p>1 - Qual o seu nome?</p>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Primeiro nome:
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Digite seu nome"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Segundo nome:
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Digite seu nome"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <p className="paragraph">2 - Qual o seu gênero?</p>
      <div className="form-check">
        <input
          className="form-check-input"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          type="radio"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Homem
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Mulher
        </label>
      </div>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          Prefiro não informar
        </label>
      </div>
      <p className="paragraph">3 - Marque os treinamentos que você fez:</p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          role="switch"
        />
        <label className="form-check-label" htmlFor="flexSwitchDefault">
          Treinamento básico de astronauta
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault2"
          role="switch"
        />
        <label className="form-check-label" htmlFor="flexSwitchDefault2">
          Treinamento físico básico
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault3"
        />
        <label className="form-check-label" htmlFor="flexSwitchDefault3">
          Treinamento avançado de astronauta
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault4"
          role="switch"
        />
        <label className="form-check-label" htmlFor="flexSwitchDefault4">
          Treinamento físico intenso
        </label>
      </div>
      <p className="paragraph">4 - Quais você acha que são suas qualidades?</p>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox1">
          Proativo
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox2">
          Resistente
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox3"
          value="option3"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox3">
          Não vomito fácil
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox4"
          value="option4"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox4">
          Não temo marciano
        </label>
      </div>
      <div className="form-check form-check-inline mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="inlineCheckbox5"
          value="option5"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox5">
          já vi todos os star wars
        </label>
      </div>
      <Button />
    </div>
  );
};
