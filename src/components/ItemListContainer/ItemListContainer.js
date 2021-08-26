/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './ItemListContainer.scss'

export const ItemListContainer = ({saludo, propuesta}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

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

   
    const pedirDatos = () => {
        
        
        return new Promise((resolve, reject)=>{

            setTimeout(() => {
                
                resolve(productos)
                
            }, 3000);
              
    
        })
       
    } 
    
    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(res => setData(res))
            
            .catch(err => console.log('error 404'))

            .finally(()=> {
                console.log('finalizada la carga de productos')  
                setLoading(false)  
            })

    }, [])



    return (
        <div className="cardsContainer">
            <h2>Lista de Productos</h2>
            <hr/>

        
            {
                loading 
                ? <h2>Cargando...</h2> 
                : 
                <ul>
                    { data.map( (prod)=> (
                    <li key={prod.id}>
                        <h3>{prod.nombre}</h3>
                        <p>{prod.precio}</p>
                    </li>
                    
                    )) }
                </ul>
            }

        </div>
    )
}


