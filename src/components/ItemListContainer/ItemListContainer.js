import { useState, useEffect } from 'react'
import './ItemListContainer.scss'

export const ItemListContainer = ({saludo, propuesta}) => {

    const [data, setData] = useState('')

    const productos = [
        {
            id: 1,
            nombre: "zapatillas",
            precio: 6000
        },
        {
            id: 2,
            nombre: "pantalones",
            precio: 5000
        },
        {
            id: 3,
            nombre: "camisas",
            precio: 8000
        }
    ]

   
    const pedirDatos = (productos) => {
       return new Promise((resolve, reject)=>{
              
        if (productos) {resolve('la promesa se resuelve correctamente')
        } else {reject("La promesa se rechaza")}
    
    })
       
} 
    useEffect(() => {
        pedirDatos(true)
            .then(res => {
                setData(res)
            })
            
            .catch(err => {
                setData(err)
            })
            .finally(()=>{console.log('fin del llamado')})
    }, [])




    return (
        <div className="cardsContainer">
            <h2>Lista de Productos</h2>
            <hr/>
            <p>{data}</p>
        </div>
    )
}


