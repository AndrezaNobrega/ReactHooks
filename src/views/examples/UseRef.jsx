import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function(string1, string2){
    var novaString = " "
    for (var i = 0; i < string1.length; i++) {
        novaString = novaString  + (string1[i] + (string2[i] || " "))
   
     }
     return(novaString)
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const count = useRef(0)
    /* Quando o ref é mudado, não é necessário renderizar novamente 
    Quando o value1 é modificado, add 1 ao contador*/

    //exercício 2
    const [value2, setValue2] = useState("")
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function(){
        count.current ++
        myInput2.current.focus()
        /* esse focus faz com que cada vez que eu digito
        ele vai para a outra caixa  
        eu digito na caixa1, o foco vai para a caixa2*/
    }, [value1]    
    )
    useEffect(function(){
        count.current ++
        myInput1.current.focus()
    }, [value2]    
    )

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title= "Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)}[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input"
                    ref={myInput1}
                    value={value1}  onChange={ e=> setValue1(e.target.value)}/>

            </div>
            <SectionTitle title= "Exercício #02 - desafio"/>
            {/* Exibir o merge entre as duas strings */}
            <div className="center">
                <input type="text" className="input" 
                    ref = {myInput2}
                    value={value2} onChange={e=> setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
