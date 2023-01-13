import { useState } from "react";


export const useCounter = (initialValue = 100) => {
    const [count, SetCount] = useState(initialValue)

    function inc (){
        SetCount(count + 1)
    }

    function dec (){
        SetCount(count - 1)
    }

    return [count, inc, dec]
}