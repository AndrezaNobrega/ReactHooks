import React, { useState } from 'react'

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = props => {
    const [state, setState] = useState(initialState)
/* operador spread: ... ele replica todo o objeto 
e acessa a chave para editar o valor 
nesse caso, nós estamos passando já as funções que irão 
alterar o num ou text, não mudando o estado inteiro indiscrinimadamente*/
    function updateState(key, value){
        setState({
            ...state,
            [key]: value
        })
    }
    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n=> updateState('number', n),
            setText: t => updateState('text', t)
        }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default Store