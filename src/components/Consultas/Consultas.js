import React, {Component} from "react";

class Consultas extends Component{
    constructor(propos){
        super(propos);
        this.state = {
            realizadas: [],
            marcadas:[]
        };
    }

    componentDidMount() {
        fetch("http://devup.com.br/php/api-dashboard/api/consultas")
            .then(result => result.json().then(data => this.setState(data)));
    }

    render() {
        return(
            <div>

            </div>
        );
    }
}