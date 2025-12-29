const users = [
    {
        id: 1,
        name: 'John Doe'
    },

    {
        id: 2,
        name: 'Jane Doe'
    }
];

function getUserById(id, callbacks){

    const user = users.find( function(user){
        return user.id === id;
    });

    if( !user ){
        //retorna una funcion la cual se envia solo el primer argunmento (error)
        return callbacks(`User not found with id ${id}`)
    }

    //retorna como primer argumento null ( ya que no hay error) 
    //y segundo argumento el objeto usuario
    return callbacks(null, user);
}

module.exports = {
    getUserById: getUserById,
}