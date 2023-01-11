import React, { useCallback } from 'react'


const UseCallbackButtons = props => {
    console.log('render')
    return(
        <div>
        <button className="btn"
        onClick={() => props.inc(6)}>+6</button>
        <button className="btn"
        onClick={() => props.inc(12)}>+12</button>
        <button className="btn"
        onClick={() => props.inc(18)}>+18</button>
    </div>
    )
}

/* Esse Reac.memo, faz com que o componente só seja renderizado
novamente, caso as propriedades mudem, pois não é necessários
que esses botões sejam renderizados todas as vezes que o estado do componente
pai seja alterado por exemplo */
export default React.memo(UseCallbackButtons)