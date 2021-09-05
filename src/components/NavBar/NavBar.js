import React from "react"
import './NavBar.scss'
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"


export const NavBar = () => {

    
    return (
        <header className="navBar">
            <h1>DOSIBOX</h1>

            <nav>
                <Link className="mx-1" to={"/"}>Inicio</Link>
                <Link className="mx-1" to={"/nosotros"}>Nosotros</Link>
                <Link className="mx-1" to={"/cart"}>Carrito</Link>
                <CartWidget cantidad={1}/>
            </nav>


        </header>
    )


}