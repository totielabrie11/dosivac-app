import React from 'react'

export const Item = ({item}) => {
console.log("🚀 ~ file: item.js ~ line 4 ~ Item ~ item", item)

    return (
        
        <div key={item.id} className="card col-4">
            <img src={item.img} alt={item.nombre}/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.precio}</p>
            <button className="btn btn-success">Ver Mas</button>
        </div>
    
    )
}
