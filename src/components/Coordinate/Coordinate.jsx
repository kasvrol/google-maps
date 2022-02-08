import React from 'react'


function Coordinate() {

    let lat = []
    let lng

    // Pega o email enviado
const url = 'Use Waze para dirigir até 1106 - 1281 R. Atílio Bório: https://waze.com/ul/h6gkzr5xdd'
let arrayOfString = url.split(' ')
arrayOfString =  arrayOfString[arrayOfString.length -1]

    // Pega o endereço resultado no browser
const urlHost = 'https://www.waze.com/pt-BR/live-map/directions?to=ll.-25.425303%2C-49.261429'
let arrayUrlHost = urlHost.split('=')

    // Pega as coordenadas
arrayUrlHost=  arrayUrlHost[arrayUrlHost.length -1]

    // Divide as coordenadas
let coordenadas = arrayUrlHost.split('%2C')

    // Isola a latitude
let latitude = coordenadas[0].split('.')
for (let index = 1; index < latitude.length; index++) {
    lat.push(latitude[index])
}
lat = lat.join('.')

    // Isola a longitude
lng = coordenadas[1]


return (
    <div>
        <h2>latitude: {lat}</h2>
        <h2>longitude: {lng}</h2>        
    </div>
    );
}

export default Coordinate;