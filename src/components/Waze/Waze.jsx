import React from 'react'

import './Waze.scss'


function Waze() {

  let elementOfArray
  let acumulador = []

  const email = 'Use Waze para dirigir até 4270 - 4324 R. Brasílio Itiberê: https://waze.com/ul/h6gkznqrkk'
  let separador = email.split(':').join(' ').split(' ')  

  for (let index = 0; index < separador.length; index++) {
    elementOfArray = index;
    console.log(elementOfArray)
  }

  for (let i = 5; i <= separador.length && i<(elementOfArray - 2); i++) {
    acumulador.push(separador[i]);
  }
  
  let nomeDaRua = acumulador.filter(() => (isNaN))
  console.log(nomeDaRua);

  let numeroDaRua = acumulador.map(Number)
  console.log(numeroDaRua);

  acumulador = acumulador.join(' ')

    return (
      <div className='mapa-waze'>
        <h1>achei numero = {elementOfArray}</h1>
        <h2>{acumulador}</h2>
      </div>
    );
  }
  
  export default Waze;
