import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Resumo from './components/Resumo/Resumo'
import Consultas from './components/Consultas/Consultas'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Resumo/>
                <Consultas/>
            </div>
        );
    }
}

export default App;
