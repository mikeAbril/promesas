const ingredientes = [
    { nombre: "Pollo", tiempo: 1500 },
    { nombre: "Arroz", tiempo: 1000 },
    { nombre: "Verduras", tiempo: 1200 },
    { nombre: "Salsa", tiempo: 800 },
    { nombre: "Especias", tiempo: 500 }
];

const cocineros = [
    { nombre: "cocinero1", grupoIngredientes: [ingredientes[0], ingredientes[1]] },
    { nombre: "cocinero2", grupoIngredientes: [ingredientes[2], ingredientes[3]] },
    { nombre: "cocinero3", grupoIngredientes: [ingredientes[4]] }
];

function preparar() {
    return new Promise((resolve, reject) => {
        console.log("Iniciando preparación...\n");
        
        let resultados = [];
        let cocinerosCompletados = 0;

        let promesasCocineros = cocineros.map((cocinero, index) => {
            return new Promise((resolveCocinero) => {
                console.log(`${cocinero.nombre} empezando...`);
                
                let ingredientesListos = [];
                let ingredientesCompletados = 0;
                

                cocinero.grupoIngredientes.map(ingrediente => {
                    return new Promise((resolveIngrediente) => {
                        console.log(`  - Preparando ${ingrediente.nombre}...`);
                        console.log(`${ingrediente.nombre} listo (${ingrediente.tiempo}ms)`);
                        
                        ingredientesListos.push(ingrediente.nombre);
                        ingredientesCompletados++;
                        
                        if (ingredientesCompletados === cocinero.grupoIngredientes.length) {
                            console.log(`${cocinero.nombre} terminó: ${ingredientesListos.join(', ')}`);
                            
                            resultados[index] = {
                                cocinero: cocinero.nombre,
                                ingredientes: ingredientesListos
                            };
                            
                            cocinerosCompletados++;
                        
                            if (cocinerosCompletados === cocineros.length) {
                                console.log("\n¡Todos terminaron!");
                                resolve(resultados);
                            }
                        }
                        
                        resolveIngrediente(ingrediente.nombre);
                    });
                });
                
                resolveCocinero();
            });
        });
    });
}

// Ejecutar
preparar()
    .then((resultado) => {
        console.log("📋 Resultado final:", resultado);
    })
    .catch((error) => {
        console.log("❌ Error:", error);
    });