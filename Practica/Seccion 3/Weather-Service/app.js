const {buildMakeWeatherReport} = require('./src/water-factory');
const {getDateTime, getUUID} = require( './src/plugins/index' );


const persona = {
    name: 'franco',
    city: 'Ushuaia'
}

//configurando el factory
const makeWeatherReport = buildMakeWeatherReport({getDateTime, getUUID});

//explicame sta linea 
const informacion = makeWeatherReport(persona);
