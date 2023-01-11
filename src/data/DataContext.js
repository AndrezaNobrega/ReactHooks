import React from 'react'

export const data = {
    number: 123,
    text: 'Context API'
}


//um objeto de contexto
export const DataContext = React.createContext(data)

export default DataContext