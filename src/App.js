import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Resumo from './components/Resumo/Resumo'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Resumo/>
            </div>
        );
    }
}

export default App;
