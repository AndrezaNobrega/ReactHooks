import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from '../../components/layout/SectionTitle';

import {initialState, reducer} from '../../store'
import { numberAdd2, login } from "../../store/actions";



const UseReducer = (props) => {
  /* esse useReducer com a letra min é o vindo do React */
  const [state, dispacth] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div>
      <SectionTitle title="Exercício #01"/>
      <div className="center">
            {state.user ? (
            <span className="text">{state.user.name}</span>
            ) : (
            <span className="text">Usuário anônimo</span>
            )}

            <span className="text">{state.number}</span>
            <div>
            <button className="btn" onClick={() => login(dispacth, "Andreza")}>
                Login
            </button>
            <button className="btn" onClick={() => numberAdd2(dispacth)}>
                +2
            </button>
          </div>
        </div>
      </div>
      <div>
      <SectionTitle title="Exercício #02"/>
           {/* criar actions para:
           multiplicar por 7
           dividir por 25
           parseInt do valor
           add o valor n
            */}
            <div>
            <span className="text">{state.number}</span>
            <button className="btn" onClick={() => dispacth({ type: "multiplybBy7" })}>x 7</button>
            <button className="btn" onClick={() => dispacth({ type: "dividedBy25" })}>/25</button>
            <button className="btn" onClick={() => dispacth({ type: "parseInt" })}>ParseInt</button>
            <button className="btn" onClick={() => dispacth({ type: "addN", nNumber: +5 })}>+5</button>
            </div>
      </div>
    </div>
  );
};

export default UseReducer;
