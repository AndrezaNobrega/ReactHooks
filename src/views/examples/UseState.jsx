import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
/*     0 é o valor inicial
    count é o valor atual
    setCount é a função que altera o estado 
    como a seguir:
    const [state, setState] = useState(initialState)
    */
    const [count, setCount] = useState(0)
    const [name, seName] = useState("INICIAL")

    return (

        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                    onClick={()=> setCount(count - 1)}>-1</button>
                    <button className="btn"
                    onClick={()=> setCount(count + 1)}>+1</button>
                    <button className="btn"
                    /* aqui temos uma função, onde pegamos o valor atual */
                    onClick={()=> setCount(currect =>currect + 1000)}>+1000</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02"/>
            <h1>{name}</h1>
            <input type="text" className="input" 
            value = {name} onChange={ e=> seName(e.target.value)}/>
        </div>
    )
}

export default UseState
