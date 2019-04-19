import React, {Component} from "react";

class Faturamento extends Component {
    constructor(propos) {
        super(propos);
        this.state = {
            detalhamento: []
        };
    }

    componentDidMount() {
        fetch("http://devup.com.br/php/api-dashboard/api/faturamento")
            .then(result => result.json().then(data => this.setState(data)));
    }

    render() {
        return (
            <div>
                <h2>Faturamento</h2>
                <div className="row">
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header">Total por forma de Pagamento</div>
                        </div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Descrição</th>
                                <th className="text-right">Valor</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.detalhamento.map((item, indice) => {
                                    return (
                                        <tr key={indice}>
                                            <td>{item.descricao}</td>
                                            <td className="text-right">
                                                {item.valor.toLocaleString("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL"
                                                })}
                                            </td>
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

export default Faturamento