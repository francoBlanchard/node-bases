
const getPokemonById = ( id, callbacks ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    
    fetch( url ).then((Response) => {
        
        Response.json().then( (pokemon)=> {
            
            callbacks(pokemon);

        });

    });
};

module.exports = getPokemonById;