import React from "react"
import './NavBar.scss'
import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar = () => {

    return (
        <header className="navBar">
            <h1>DOSIBOX</h1>

            <nav>
                <a href="#">Inicio</a>
                <a href="#">Producto</a>
                <a href="#">Nosotros</a>
                <a href="#">Contactos</a>
                <CartWidget cantidad={1}/>
            </nav>


        </header>
    )


}