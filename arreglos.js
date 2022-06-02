let categoriaJuego = [
  "Lucha",
  "shooter",
  "Acción",
  "Carrera",
  "Misterio",
  "Terror",
  "Puzzle",
  "Lucha",
  "Indie",
  "ategoria"
]

console.log(`
################################
  Las categoría de juegos son
################################
`);
// forma antigua
/* for( let i = 0; i < categoriaJuego.length; i++ ) {
  console.log(categoriaJuego[i]);
} */

// forma forEach
/* categoriaJuego.forEach( (value) => {
  console.log(`value => ${value}`);
}) */

// filtra
console.log( categoriaJuego.filter( (value) => { return value.endsWith("e") } ) )
console.log( categoriaJuego.filter( (value) => { return value.startsWith("A") } ) )

// mapea y transforma si quieres
console.log( categoriaJuego.map( (value) => { return value.toUpperCase() } ) )
console.log( categoriaJuego.map( (value) => { return value.toLowerCase() } ) )

console.log( categoriaJuego.find( (value) => { return value.endsWith("e") } ) )

// concat une dos arreglos
console.log( [1,2,3].concat( [5,6,7] ) )

// retorna true si existe lo buscado
console.log( categoriaJuego.includes("Lucha") )

// te muestra la posición del objeto
console.log( categoriaJuego.indexOf("Lucha") )
console.log( categoriaJuego.lastIndexOf("Lucha") )
// ordena
console.log( categoriaJuego.sort() )
console.log( categoriaJuego.sort().reverse() )