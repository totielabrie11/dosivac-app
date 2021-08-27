import { productos } from "../data/stock"

export const pedirDatos = () => {
        
        
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            
            resolve(productos)
            
        }, 3000);
          

    })
   
} 