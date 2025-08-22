 const ventas = [
 { id: 1, idarticulo: 101, cantidad: 2, fecha: '2024-08-01' },
 { id: 2, idarticulo: 102, cantidad: 1, fecha: '2024-08-01' },
 { id: 3, idarticulo: 103, cantidad: 3, fecha: '2024-08-02' },
 { id: 4, idarticulo: 101, cantidad: 4, fecha: '2024-08-02' },
 { id: 5, idarticulo: 101, cantidad: 1, fecha: '2024-08-03' },
 { id: 6, idarticulo: 104, cantidad: 1, fecha: '2024-08-03' },
 { id: 7, idarticulo: 102, cantidad: 7, fecha: '2024-08-04' },
 { id: 8, idarticulo: 101, cantidad: 5, fecha: '2024-08-04' },
 { id: 9, idarticulo: 102, cantidad: 1, fecha: '2024-08-05' },
 { id: 10, idarticulo: 103, cantidad: 2, fecha: '2024-08-05' }
];
const articulos = [
 { idarticulo: 101, nombre: 'televisor' },
 { idarticulo: 102, nombre: 'celular' },
 { idarticulo: 103, nombre: 'nevera' },
 { idarticulo: 104, nombre: 'computador' }
];

function buscar(idarticulo) {
    return new Promise ((resolve,reject)=>{
        let articulo = articulos.find(item => item.idarticulo === idarticulo)
        if (articulo) {
              let ventasConMasDe3 = ventas.filter(element => element.idarticulo === idarticulo && element.cantidad > 3);
            if (ventasConMasDe3.length > 0) {
                    let detalles = ventasConMasDe3.map(venta => `el articulo ${articulo.nombre} con el id ${venta.id} tuvo ${venta.cantidad} ventas`);
                    resolve(detalles)
            }else{
                reject(`no ubieron mas de 3 ventas para el articulo ${articulo.nombre}`)
            }
            
        }else{
            reject(`no se encontro articulo con ese id`)
        }
    })
}

buscar(101)
.then((resultado)=>{
    console.log(resultado);
    
})
.catch((err)=>{
    console.log(err);
    
})