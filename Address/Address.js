function Address() {

  // variáveis
  let elementOfArray
  let arrayStreet = []
  let number
  let name
  let address

  // Pega email
  const email = 'Use Waze para dirigir até 1106 - 1281 R. Atílio Bório: https://waze.com/ul/h6gkzr5xdd'
  let arrayOfString = email.split(':').join(' ').split(' ')  


  // Conta os elementos
  for (let index = 0; index < arrayOfString.length; index++) {
    elementOfArray = index;
  }

  // Isola o endereço
  for (let i = 5; i <= arrayOfString.length && i<(elementOfArray - 2); i++) {
    arrayStreet.push(arrayOfString[i]);
  }


  // Separa o número do endereço
  let numberOfStreet = arrayStreet.map(Number).filter((value) => (value%1)===0)
  number = numberOfStreet.join(' - ')


  // Isola o nome da rua do endereço
  if(numberOfStreet.length === 2){
    name = arrayStreet.splice(3,3).join(' ')
    address = `${name}, ${number}`
  }
  else if(numberOfStreet.length === 1){
    name = arrayStreet.splice(0,1).join(' ')
    address = `${name}, ${number}`
  }
  else{
    name = arrayStreet.join(' ')
    address = `${name}`
  }

    return address
}
  
export default Address;
