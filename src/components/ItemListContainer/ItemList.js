import React from 'react'
import {Item} from './Item.js' 

export const ItemList = ( {productos} ) => {
    return (
        <secction className="container my-5">
            <h2>Productos</h2>
            <hr/>
            <div className="row">
                
                {productos.map((prod) => <Item key={prod.id} item={prod}/>)}

            </div>
        </secction>
    )
}
