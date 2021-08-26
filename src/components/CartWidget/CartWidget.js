import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import '../CartWidget/CartWidget.scss'

export const CartWidget = ({ cantidad = 0 }) => {
    return (
        <div className="CartWidget">
            <FaCartPlus />
            <span>{cantidad}</span>
        </div>
    )
}
