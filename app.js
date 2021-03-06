const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la region para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async (direccion) =>{
    try{
        let coors = await lugar.getLugarLatLng( argv.direccion );
        let temp = await clima.getClima( coors.lat, coors.lng );
        return `El clima en ${coors.direccion} es de ${temp} ºC`;
    }catch(e){
        return `No se pudo determinar el clima en ${direccion}`;
    }
} 

getInfo(argv.direccion)
.then(message => console.log(message))
.catch( e => console.log( e ));