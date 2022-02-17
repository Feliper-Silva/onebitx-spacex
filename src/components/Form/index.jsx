import logoImg from '../../assets/logoOneBitDark.png';

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

      <p className="paragraph">3 - Marque os treinamentos que você fez:</p>
    </div>
  );
};
