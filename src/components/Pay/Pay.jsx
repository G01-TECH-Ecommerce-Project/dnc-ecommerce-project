import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Pay = (onClose) => {
const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="modal-pay">
      <div className="container">
        <form className="pay-time">
        <button className="close-button-modal-2" onClick={onClose}></button>
          <h3 className="pay-title">Finalizar compra: </h3>
          <label className="label-pay-type-name" htmlFor="name">
            Digite seu nome:
          </label>
          <input
            className="input-pay"
            type={"text"}
            placeholder="Nome Completo"
          ></input>

          <label className="label-pay-type-cpf" htmlFor="cpf">
            Digite seu CPF:
          </label>
          <input
            className="input-pay"
            type={"text"}
            placeholder="EX: 123.456.789-00"
          ></input>

          <label className="label-pay-type-adress" htmlFor="adress">
            Endereço:
          </label>
          <input
            className="input-pay"
            type={"password"}
            placeholder="********"
          ></input>

          <label className="label-pay-type" htmlFor="pay-tipe">
            Forma de pagamento:
          </label>
          <input
            className="input-pay"
            type={"text"}
            placeholder="********"
          ></input>

          
          <button className="confirm-order">Confirmar Pedido</button>
          <span id="sucess"></span>
        </form>

        {isModalVisible ? (
              <Pay onClose={() => setIsModalVisible(false)} data={data} />
            ) : null}
      </div>
    </div>
  );
};

export default Pay;
