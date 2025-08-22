
let documentos = [
{ id: 1, archivo: "word" },
{ id: 2, archivo: "powerpoint" },
{ id: 3, archivo: "excel" },
];
 




function descargarArchivo(id) {
 return new Promise((resolve,reject)=>{
    let descargar = documentos.find(item => item.id === id)
    if (descargar) {
        resolve(`descargando ${descargar.archivo}`)
    }else{
        reject("------")
        
    }
 })
}
function procesarArchivo(id) {
 return new Promise ((resolve, reject)=>{
    let procesando = documentos.find(item => item.id === id)
    if (procesando) {
        resolve(`procesando ${procesando.archivo}`)
    }else{
        reject(`------`)
    }
 })
}
 

descargarArchivo(1)
.then((descar)=>{
    console.log(descar);
    procesarArchivo(1)
    .then((proceso)=>{
        console.log(proceso);
        console.log("archivo procesado exitosamente");
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
})
.catch((err)=>{
    console.log(err);
    
})