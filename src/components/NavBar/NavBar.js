import React, {Component} from "react"

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/" className="navbar-brand">Home</a>

                <button className="navbar-toggler" type="button" data-toogle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto"> </ul>

                </div>
            </nav>
        )
    }
}

export default NavBar