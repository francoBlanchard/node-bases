const fs =  requiere('fs');//se importa el paquete o modulo de file System

//leer archivo
const data = fs.readFileSync('README.md', 'utf8');

//modifcar archivo (se cambian todo lo que decia react por angular)
const newData = data.remplace(/React/ig, 'angular');

//se escribe uno nuevo
fs.writeFileSync('Readme-angular.md', newData);