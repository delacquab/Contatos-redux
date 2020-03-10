import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router-dom";

export default function Edit(props) {
  const id = props.match.params.contato_id
  //const { contato_id } = useParams()
  const dispatch = useDispatch()
  const contato = useSelector(store => store.contato)
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [deuErro, setDeuErro] = useState(false)


  try {
    useEffect(() => {
      console.log(id)
      dispatch({ type: "GET_CONTATO", payload: id })
      setNome(contato[0].nome)
      setSobrenome(contato[0].sobrenome)
    }, [dispatch, contato[0].nome, contato[0].sobrenome])
  } catch (error) {
    dispatch({ type: "SET_INITIAL_CONTATO" })
    { console.log(contato) }
    setDeuErro(true)
  }



  function handleClick() {
    const contato = { nome, sobrenome, id };
    dispatch({ type: "EXCLUIR_CONTATO", payload: id });
    dispatch({ type: "SET_CONTATO", payload: contato });
    //dispatch({ type: "SET_CONTATO_ID", payload: contato });
    props.history.push("/");
  }


  return (
    <div>
      {deuErro && <Redirect to="/404" />}

      <h1>Altera</h1>
      <label>Nome</label>
      <input
        data-test="nome"
        type="text"
        placeholder="nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      ></input>
      <label>Sobrenome</label>
      <input
        data-test="email"
        type="text"
        placeholder="sobrenome"
        value={sobrenome}
        onChange={e => setSobrenome(e.target.value)}
      ></input>
      <button data-test="salvar" onClick={handleClick}>Alterar</button>
      {console.log(deuErro)}
      <p>{deuErro ? "Sim" : "Não"}</p>
    </div>
  );
}
