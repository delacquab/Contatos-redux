import { createStore } from "redux";

const initialState = {
  contatos: [],
  qtdContatos: 0,
  id: 1
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CONTATO":
      console.log(state.contatos);
      return {
        ...state,
        contatos: [...state.contatos, action.payload]
      };

    case "GET_CONTATOS":
      //localStorage.setItem('todoapp', JSON.stringify(action.payload))
      return {
        ...state,
        contatos: [...state.contatos]
      };

    case "GET_QTD":
      return {
        ...state,
        qtdContatos: state.qtdContatos
      };

    case "GET_ID":
      return {
        ...state,
        id: state.id
      };

    case "SET_ID":
      return {
        ...state,
        id: state.id + 1
      };

    case "EXCLUIR_CONTATO":
      return {
        ...state,
        contatos: state.contatos.filter(c => {
          return c.id !== action.payload;
        })
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
