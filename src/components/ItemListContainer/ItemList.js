import React from 'react'

export const ItemList = ( {productos} ) => {
    return (
        <secction className="container my-5">
            <div className="row">
                <h2>Productos</h2>
                <hr/>
                
                    {productos.map((prod) => (
                        <div key={prod.id} className="card col-4">
                            <img src={prod.img} alt={prod.nombre}/>
                            <h3>{prod.nombre}</h3>
                            <p>{prod.desc}</p>
                            <p>{prod.precio}</p>
                        </div>
                    ))}

            </div>
        </secction>
    )
}
