/*
Clase:
Objeto (como de la vida real) que tiene:
- atributos
- constructor
- metodos
ej: Perro

Atributos:
  pelos
  ojos
  patas
  cola
metodos:
  correr
  ladrar
  caminar
  saltar
*/
class Persona {
  // atributos
  nombres;
  apellidos;
  edad;
  email;

  // constructor
  constructor(nombres, apellidos, edad, email) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.edad = edad;
    this.email = email;
  }

  imprimir() {
    console.log(`
    nombres: ${this.nombres},
    apellidos: ${this.apellidos},
    edad: ${this.edad},
    email: ${this.email}
  `)
  }
}

class FabricaDePersonas {
  personas = [];
  constructor() {

  }
  agregarPersonas(persona) {
    this.personas.push(persona);
  }
  eliminarPersonaPorNombre(nombre) {
    // opción 1
    this.personas = this.personas.filter( p => p.nombres != nombre );
    
    // opcion 2
    /* let pIndex = this.personas.findIndex( p => p.nombres == nombre );
    if( pIndex != -1 )
      this.personas.splice(pIndex,1); */
  }
  listaMayorEdad() {
    /* let mayorEdad = [];
    for (let index = 0; index < this.personas.length; index++) {
      if( this.personas[index].edad > 18)
        mayorEdad.push(this.personas[index]);
  
    } */
    let mayorEdad = this.personas.filter( (p) => p.edad >= 18 );
    console.log(mayorEdad);
  }
  imprimirPersonas() {
    this.personas.forEach( p => {
      p.imprimir();
    })
  }
}

let faPer = new FabricaDePersonas();

faPer.agregarPersonas(new Persona('Juan', 'Venegas', 29, 'a@a.cl'));
faPer.agregarPersonas(new Persona('Francisco', 'Gutierrez', 18, 'b@b.cl'));
faPer.agregarPersonas(new Persona('Saray', 'Budin', 8, 'c@c.cl'));

console.log("#################### imprimirPersonas");
faPer.imprimirPersonas();
console.log("#################### eliminarPersonaPorNombre");
faPer.eliminarPersonaPorNombre('Juan');
faPer.imprimirPersonas();
console.log("#################### listaMayorEdad");
faPer.listaMayorEdad();
/* let personas = [];
personas.push( new Persona('Juan', 'Venegas', 29, 'a@a.cl'));
personas.push( new Persona('Francisco', 'Gutierrez', 18, 'b@b.cl'));
personas.push( new Persona('Saray', 'Budin', 8, 'c@c.cl')); */