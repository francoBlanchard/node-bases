console.log( process.env );

//DESESTRUCTURANDO OBJETOS
const {SHELL} = process.env;


//DESESTRUCTURANDO ARREGLOS
const hero = ['flash', 'superman', 'batman']

const [, ,batman] = hero;