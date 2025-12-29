//const {emailTemplate} = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const { use } = require('react');
//const {getUserById} = require('./js-foundation/03-callbacks');
//const { getUserById } = require("./js-foundation/04-arrow");
//const {buildMakePerson} = require('./js-foundation/05-factory');
//const { getUUID, getAge } = require ('./plugins/index');
const getPokemonById = require('./js-foundation/06-promises')

//console.log(emailTemplate);

//----------------------------------------------------------------

//const id = 1;

//getUserById(id, (error, user) => {
//
//    if(error){ 
//        throw new Error(error);
//    };
//
//    console.log({user});
//
//});

//----------------------------------------------------------------

//const makePerson = buildMakePerson({getUUID, getAge});

//const franco = makePerson({name: 'franco', birthdate: '2001-09-17'});

//console.log(franco);

//----------------------------------------------------------------

console.log(getPokemonById(1));