import React, {Component} from "react";

class Consultas extends Component {
    constructor(propos) {
        super(propos);
        this.state = {
            realizadas: [],
            marcadas: []
        };
    }

    componentDidMount() {
        fetch("http://devup.com.br/php/api-dashboard/api/consultas")
            .then(result => result.json().then(data => this.setState(data)));
    }

    render() {
        return (
            <div>
                <h2>Consultas</h2>
                <div className="row">
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header">Realizadas</div>
                        </div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Especialidade</th>
                                <th>Quantidade</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.realizadas.map((item, indice) => {
                                    return (
                                        <tr key={indice}>
                                            <td>{item.especialidade}</td>
                                            <td>{item.quantidade}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header">Realizadas</div>
                        </div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Especialidade</th>
                                <th>Quantidade</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.marcadas.map((item, indice) => {
                                    return (
                                        <tr key={indice}>
                                            <td>{item.especialidade}</td>
                                            <td>{item.quantidade}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Consultas