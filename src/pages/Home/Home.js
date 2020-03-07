import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const qtdContatos = useSelector(store => store.qtdContatos);
  const contatos = useSelector(store => store.contatos);
  //const [contatos2, setContatos2] = useState(contatos);

  useEffect(() => {
    dispatch({ type: "GET_CONTATOS" });
  }, [dispatch]);

  const handleAlterar = id => {
    console.log(id);

    <Link to={"/1/edit"}>gfgd</Link>;
  };

  const handleExcluir = id => {
    console.log(id);
    dispatch({ type: "EXCLUIR_CONTATO", payload: id });
  };

  return (
    <div>
      <Link to={"/cadastro"}>Adicionar Contato</Link>
      <div>
        <ul>
          {contatos.map(contato => {
            return (
              <li>
                {contato.id + " " + contato.nome + " " + contato.sobrenome}{" "}
                <button onClick={x => handleAlterar(contato.id)}>
                  Alterar
                </button>
                <button onClick={x => handleExcluir(contato.id)}>
                  Excluir
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
