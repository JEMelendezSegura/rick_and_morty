import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"
import NumeroAleatorio from "../SearchBarRandom/SearchBarRandom";


// componente de clase.
class Nav extends React.Component{
    constructor (props){
        super(); // super utiliza los métodos del padre, (los hereda)
    }

render(){
    return (
        <nav className={style.nav}>
            <SearchBar onSearch={this.props.onSearch}/>
            
            <NumeroAleatorio onSearch={this.props.onSearch}/>
        </nav>
    )}
}

export default Nav;