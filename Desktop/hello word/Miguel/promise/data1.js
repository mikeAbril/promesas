
let usuarios = [
{ id: 1, nombre: "Jaimito" },
{ id: 2, nombre: "Andrea" },
{ id: 3, nombre: "Mariana" },
];

let saludarDespuesDe =(nombre)=> {
 return new Promise ((resolve, reject) =>{
    let usuario = usuarios.find(item => item.id === nombre)
    if (usuario) {
        resolve(`👋¡Hola, ${usuario.nombre}! ¿Cómo estás?`);
    }else{
        reject("")
    }
 })
}
 
saludarDespuesDe(3)
.then((name)=>{
    console.log(name);
    
})
.catch((error)=>{
    console.log(error);
    
})