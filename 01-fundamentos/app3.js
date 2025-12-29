//se importa el paquete o modulo de file System
const fs =  requiere('fs');

//leer archivo
const data = fs.readFileSync('README.md', 'utf8');

const wordCount = data.split(' ');

//convierte cada palabra en minuscula (insensitive)
//const reactWordCount = wordCount.filter( palabra => palabra.toLowerCase() === 'react');

//recorre las palabra evaluando si contiene "React" pero antes lo convierte en minuscula
//const reactWordCount = wordCount.filter( palabra => palabra.toLowerCase().includes('react'));

//eexpresion regular
const reactWordCount = data.match(/react/gi ?? []).length

console.log('palabras: ', reactWordCount);


