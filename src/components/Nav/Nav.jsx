import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"
import NumeroAleatorio from "../SearchBarRandom/SearchBarRandom";
import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";

// componente de clase.
class Nav extends React.Component{
    constructor (props){
        super(); // super utiliza los métodos del padre, (los hereda)
    }

render(){
    return (
        <nav className={style.nav}>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>

            <NavLink to="/about">
                <button>About</button>
            </NavLink>

            <NavLink to="/">
                <button>Logout</button>
            </NavLink>

            <SearchBar onSearch={this.props.onSearch}/>
            <NumeroAleatorio onSearch={this.props.onSearch}/>


        </nav>
    )}
}

export default Nav;