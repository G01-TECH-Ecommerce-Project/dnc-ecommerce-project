import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Pay = ({ onClose = () => {} }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="modal-pay">
      <div className="container__pay">
        <form className="formPay">
          <button className="close-button-modal-2" onClick={onClose}></button>
          <h3 className="formPay__title">Finalizar compra: </h3>
          <div className="formPay__container">
            <label className="formPay__container-label" htmlFor="name">
              Digite seu nome:
            </label>
            <input
              id="name"
              className="formPay__container-input"
              type={"text"}
              placeholder="Nome Completo"
            ></input>
          </div>

          <div className="formPay__container">
            <label className="formPay__container-label" htmlFor="cpf">
              Digite seu CPF:
            </label>
            <input
              id="cpf"
              className="formPay__container-input"
              type={"text"}
              placeholder="EX: 123.456.789-00"
            ></input>
          </div>

          <div className="formPay__container">
            <label className="formPay__container-label" htmlFor="address">
              Endereço:
            </label>
            <input
              id="address"
              className="formPay__container-input"
              type={"password"}
              placeholder="********"
            ></input>
          </div>

          <div className="formPay__container">
            <label className="formPay__container-label" htmlFor="pay-type">
              Forma de pagamento:
            </label>
            <input
              id="pay-type"
              className="formPay__container-input"
              type={"text"}
              placeholder="********"
            ></input>
          </div>

          <button className="formPay__button">Confirmar Pedido</button>
          <span id="sucess"></span>
        </form>
      </div>
    </div>
  );
};

export default Pay;
