import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
//função recursiva
function calcFatorial(num){

    const n = parseInt(num)

    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n-1) * n

}

function calcPair(numb){
    const n = parseInt(numb)
    if (n%2 === 0) return 1
    else return -1
}

const UseEffect = (props) => {
  /*   essa parte é responsável pela renderização do  componente  
    portanto, não pode ser chamada uma função como a do calcFatorial aqui dentro 
    que é de mudar o estado
    para isso usamos o useEffect 

    nesse caso, temos o setFatorial, para executar essa mudança
    precisamos escrever a função de cálculo do fatorial
    o setFatorial chama essa função, pois é como ela irá alterar o valor (estado)
     */
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const [numberPair, setNumb] = useState(-1)
    const [isPair, setPair] = useState(-1)

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])
    /*primeiro parametro a função, o segundo a lista de depedências */

    useEffect(function(){
        setPair(calcPair(numberPair))
    }, [numberPair])
    /* setPair -> calcPair -> numberPair */
    /* A função poderia ter sido feita dentro do setPair
       number %2 === 0 ? "Par" : "Ímpar" */

    useEffect(function(){
        if (fatorial > 1000){
            document.title = "Eita!"
        }
    }, [fatorial])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">Fatorial:</span>
                <span className="text red">{fatorial == -1 ? 'Não existe' : fatorial}</span>
                <input type="number" 
                    className="input"
                    value={number}
                    onChange={e=> setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02"/>
            {/* desafio: texto status, valor par ou impar
             */}
            <div className="center">        
                <span className="text">Par ou impar?</span>
                <span className="text red">{isPair == -1 ? "É impar" : "É par"}</span>
                <input type="number" 
                    className="input"
                    value={numberPair}
                    onChange={e=> setNumb(e.target.value)} />
            </div>
        </div>
        
    )
}

export default UseEffect
