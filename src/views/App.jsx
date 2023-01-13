import './App.css'
import React, {useState} from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, {data} from '../data/DataContext'
import Store from '../data/Store'
// o dataContext deve ser inicializado com o valor que a gente 
// passar para toda a aplicação

//estamos inicializando com dois atributos o state e o setState

//useState sendo inicializado com um objeto
const App = props => {
    const [state, setState] = useState(data)
    return (
        <Store>
            <DataContext.Provider value = {{state, setState}}>
                    <div className="App">
                        <Router>
                            <Menu />
                            <Content />
                        </Router>
                    </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App