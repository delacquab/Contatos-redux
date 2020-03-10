import { createStore } from "redux";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const initialState = {
  contatos: [],
  qtdContatos: 0,
  id: 1,
  contato: [{
    nome: "teste",
    sobrenome: "teste",
    id: 0
  }]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_INITIAL_CONTATO":
      return {
        ...state,
        contato: [{
          nome: "teste",
          sobrenome: "teste",
          id: 0
        }]
      }


    case "GET_QTD_CONTATOS":
      return {
        ...state,
        qtdContatos: state.contatos.length
      }

    case "SET_CONTATO":
      return {
        ...state,
        contatos: [...state.contatos, action.payload]
      };

    case "SET_CONTATO_ID":
      return {
        ...state,
        contatos: state.contatos.filter(c => {
          return c.id !== action.payload.id;
        }),
        contatos: [...state.contatos, action.payload]
      };

    case "GET_CONTATO":
      //localStorage.setItem('todoapp', JSON.stringify(action.payload))
      console.log(action.payload)
      return {
        ...state,
        contato: state.contatos.filter(c => {
          return c.id == action.payload;
        })
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
      console.log(action.payload)
      return {
        ...state,
        contatos: state.contatos.filter(c => {
          return c.id != action.payload;
        })
      };

    default:
      return state;
  }
}

//const store = createStore(reducer);
const persistConfig = {
  key: "contatos",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer);

const persistor = persistStore(store)

//export default store;
export { store, persistor };
