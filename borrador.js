function tablaDelSeis() {
    // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
    // Tu código:
    let sum ;
    let tabla = [];
    
    for (let i = 0; i < 11; i++) {
       sum = 6* i;
       tabla.push(sum)
    }
    return tabla;
    console.log(tabla);
 }
 tablaDelSeis();
