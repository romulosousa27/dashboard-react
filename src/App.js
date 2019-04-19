import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Resumo from './components/Resumo/Resumo'
import Consultas from './components/Consultas/Consultas'
import Faturamento from  './components/Faturamento/Faturamento'
class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Resumo/>
                <Consultas/>
                <Faturamento/>
            </div>
        );
    }
}

export default App;
