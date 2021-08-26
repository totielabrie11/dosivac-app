import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const ClickTraker = () => {
    
    const [contador, setContador] = useState(0);
    const [fecha, setFecha] = useState( null );

    const handleClick = () => {
        setContador( contador + 1)
        setFecha( new Date().toLocaleString() )
    }


    useEffect( ()=> {
        console.log("Componente montado")

        return () => {
            console.log("Componente desmontado")
        }
    }, [])
    
    useEffect( ()=>{
        console.log("contador actualizado")
    }, [contador])
    
    return (
        <div className="container" onClick={handleClick}>
            <h2 className="btn btn-warning mt-4">Click Traker</h2> 
            <hr/>

            <p>Clicks: {contador}</p>
            <p>clickedo el: {fecha}</p>
            <hr/>
            
        </div>
    )
}
