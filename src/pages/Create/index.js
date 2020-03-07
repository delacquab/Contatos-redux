import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";

export default function Cadastro({ history }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const dispatch = useDispatch();
  const id = useSelector(store => store.id);

  function handleClick() {
    dispatch({ type: "SET_ID" });
    console.log(id);
    const contato = { nome, sobrenome, id };
    dispatch({ type: "SET_CONTATO", payload: contato });
    history.push("/");
  }

  return (
    <div>
      <h1>Cadastro</h1>
      <label>Nome</label>
      <input
        type="text"
        placeholder="nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      ></input>
      <label>Sobrenome</label>
      <input
        type="text"
        placeholder="sobrenome"
        value={sobrenome}
        onChange={e => setSobrenome(e.target.value)}
      ></input>
      <button onClick={handleClick}>Cadastrar</button>
    </div>
  );
}
