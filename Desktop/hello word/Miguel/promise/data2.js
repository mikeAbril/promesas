
let comidas = [
{ id: 1, preparacion: "preparando panqueques..."},
{ id: 2, preparacion: "preparando huevos pericos..." },
{ id: 3, preparacion: "preparando hamburguesa..." },
];
let jugos = [
{ id: 1,  jugo: "mandarina" },
{ id: 2,  jugo: "cafe en leche" },
];




 let prepararDesayuno =(id)=> {
    return new Promise ((resolve, reject)=>{
        let comida = comidas.find(item => item.id == id)
        if (comida) {
            resolve(comida.preparacion)
        }else{
            reject("esta comida no esta en el menu")
        }
    })
}

let sirviendoJugo = (id =>{
    return new Promise ((resolve, reject)=>{
        let jugo = jugos.find(item =>item.id == id)
        if (jugo) {
            resolve(`siviendo ${jugo.jugo}  `)
        }else{
            reject("esta comida va sin jugo")
        }
    })
})

prepararDesayuno(1)
.then((comida)=>{
   
    console.log(comida);
    
    sirviendoJugo(1)
    .then((jugo)=>{
        console.log(jugo);
        
    })
    .catch((error)=>{
        console.log(error);
        
    })
    
})
.catch((error)=>{
    console.log(error);
    
})