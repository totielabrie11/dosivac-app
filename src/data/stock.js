import img from './../img/img'

console.log(img) //profe Viky , tengo capturado el img que tiene un objeto con cada una de las rutas de mi imagen. si pruebo esto {img.img1} me da error. no termino de entender del todo como desestructurar los objetos o llegado el caso un array. También cuando hago el export de mis url de img , tengo la opción de pasar todo como array.   

export const productos = (img) => [
    {
        id: 1,
        category: 'guitarras',
        nombre: "Ibanez Shem",
        precio: 45000,
        desc: "Guitarra tipo Super Strat, diseñada por el guitarrista Steve Vai",
        img: {img}
    },
    {
        id: 2,
        category: 'guitarras',
        nombre: "Fender Stratocaster",
        precio: 35000,
        desc: "Mas de 40 años con su sonido distinguido",
        img: {img}
    },
    {
        id: 3,
        category: 'bajos',
        nombre: "Fender",
        precio: 25000,
        desc: "calidad de construccion",
        img: {img}
    },
    {
        id: 4,
        category: 'bajos',
        nombre: "Ibanez",
        precio: 3000,
        desc: "Extra potente",
        img: {img}
    },
    {
        id: 5,
        category: 'accesorios',
        nombre: "Cuerdas Ernie Ball",
        precio: 900,
        desc: "Brillo y calidad de sonido",
        img: {img}
    },
    {
        id: 6,
        category: 'accesorios',
        nombre: "Puas Dunlop de 1.5",
        precio: 100,
        desc: "Robustes y solidez",
        img: {img}
    }
]