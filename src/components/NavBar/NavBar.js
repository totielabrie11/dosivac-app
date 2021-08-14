import React from "react"
import './NavBar.scss'


export const NavBar = () => {

    return (
        <header className="navBar">
            <h1>LOGO</h1>

            <nav>
                <a href="#">Inicio</a>
                <a href="#">Producto</a>
                <a href="#">Nosotros</a>
                <a href="#">Contactos</a>
            </nav>
        </header>
    )


}