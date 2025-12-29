//const { getUUID, getAge } = require ('../plugins/index');


const buildMakePerson = ({getUUID, getAge}) => {

    return ({ name, birthdate }) => {

        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}


//const obj = {
//    name: 'franco',
//    birthdate: '2001-09-17'
//}

//const franc = buildPerson ( obj );

//console.log(franc);
module.exports = {buildMakePerson};