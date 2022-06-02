let personas = [1];

// elimina el último
personas.pop()

// función para agregar personas de manera dinámica
function agregarPersona(nombres, apellidos, edad, email) {
  //creación de personas
  let persona = {
    nombres: nombres,
    apellidos: apellidos,
    edad: edad,
    email: email,
    imprimir : () => {
      console.log(`
      nombres: ${nombres},
      apellidos: ${apellidos},
      edad: ${edad},
      email: ${email}
    `)
    }
  }
  //agrega al final
  personas.push(persona);
}

function listaMayorEdad() {
  /* let mayorEdad = [];
  for (let index = 0; index < personas.length; index++) {
    if( personas[index].edad > 18)
      mayorEdad.push(personas[index]);

  } */
  let mayorEdad = personas.filter( (p) => p.edad > 18 );
  console.log(mayorEdad);
}
function eliminarPersonaPorNombre(nombre) {
  // opción 1
  personas = personas.filter( p => p.nombres != nombre );
  
  // opcion 2
  /* let pIndex = personas.findIndex( p => p.nombres == nombre );
  if( pIndex != -1 )
    personas.splice(pIndex,1); */
  console.log(personas);
}

agregarPersona('Juan', 'Venegas', 29, 'a@a.cl');
agregarPersona('Francisco', 'Gutierrez', 18, 'b@b.cl');
agregarPersona('Saray', 'Budin', 8, 'c@c.cl');

//listaMayorEdad();
//console.log(personas);
//eliminarPersonaPorNombre('Francisco')

personas.forEach( p => {
  p.imprimir();
})