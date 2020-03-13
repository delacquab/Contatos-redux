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
    dispatch({ type: "GET_QTD_CONTATOS" });
  }, [dispatch]);


  const handleExcluir = id => {
    dispatch({ type: "EXCLUIR_CONTATO", payload: id });
    dispatch({ type: "GET_QTD_CONTATOS" });
  };

  return (
    <div>
      <Link data-test="novo-contato" to={"/create"}>Adicionar Contato</Link>
      <div>
        {qtdContatos !== 0 ?
          <div>
            <ul>
              {contatos.map(contato => {
                return (
                  <li>
                    {contato.id + " " + contato.nome + " " + contato.sobrenome}{" "}
                    <Link data-test="editar" to={`/${contato.id}/edit`}>
                      Alterar
                </Link>
                    <button data-test="apagar" onClick={x => handleExcluir(contato.id)}>
                      Excluir
                </button>
                  </li>
                );
              })}
            </ul>
            <p data-test={`total-${qtdContatos}`}>Contatos: {qtdContatos}</p>
          </div>
          :
          <div data-test="sem-contatos">
            <p>Vazio</p>
          </div>}

      </div>
    </div>
  );
}
