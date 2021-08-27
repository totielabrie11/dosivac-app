/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './ItemList'
import './ItemListContainer.scss'

export const ItemListContainer = ({saludo, propuesta}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
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
        <>
            {loading 
             ? <h2>Cargando...</h2>
             : <ItemList productos={data}/>    
            }
        </>
    )
    
}


