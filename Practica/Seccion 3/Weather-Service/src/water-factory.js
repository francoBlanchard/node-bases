

const buildMakeWeatherReport = ({ getDateTime, getUUID }) => {

        return ({city, temperature}) => {
            return ({
            id: getUUID(),
            city,
            temperature,
            time: getDateTime()
        })
    }    
}

module.exports = buildMakeWeatherReport;