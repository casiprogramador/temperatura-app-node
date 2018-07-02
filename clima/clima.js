const axios = require('axios');

const getClima = async ( lat, lng ) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=e2a9fa82b1e816f0f1616e91b51ba54d`)

    if(resp.cod === '400'){
        throw new Error(`No existe el clima para las cordenadas lat: ${ lat } , lng: ${ lng }`);
    }

    return resp.data.main.temp
    
}

module.exports = {
    getClima
}