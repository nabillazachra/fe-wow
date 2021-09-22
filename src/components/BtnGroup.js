import React from "react";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";

export default function BtnGroup() {
  const [modalReg, setModalReg] = React.useState(false);
  const [modalLogin, setModalLogin] = React.useState(false);

  return (
    <div className="btn-group">
      <button className="btn-reg radius ws" onClick={() => setModalReg(true)}>
        Sign Up
      </button>
      <ModalRegister show={modalReg} onHide={() => setModalReg(false)} />
      <button
        className="btn-login radius ws"
        onClick={() => setModalLogin(true)}
      >
        Sign In
      </button>
      <ModalLogin show={modalLogin} onHide={() => setModalLogin(false)} />
    </div>
  );
}
