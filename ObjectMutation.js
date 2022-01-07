const person = {
  firstName: "Alisson",
  lastName: "Emidio",
  age: 26,
  address: {
    street: "Rua Principal",
    numero: 50
  }
}

const deepCopy = (obj) => {
  //verificar cada item do objeto e ver se é um objeto
  //se for fazer um deepcopy
  //se nao retornar a chave
  const keys = Object.keys(obj);
  const newObject = {};

  for(let i = 0; i < keys.length; i++){
    const key = keys[i];
    if(typeof obj[key] === 'object'){
      newObject[key] = deepCopy(obj[key]);
    }else{
      newObject[key] = obj[key];
    }
  }

  return newObject;
}

const person2 = deepCopy(person);
person2.address.street = "Rua Dois"

console.log(person.address.street, person2.address.street) // "Rua Principal","Rua Dois"
//Se simplesmente fazer um Object.assign({},person) voce muda os objetos em si da referencia porem os objetos
//dentro desse objeto ainda apontam pra mesma referência fazendo com que quando você muda o person2.address.street
//para "Rua Dois" muda também o person.address.street para "Rua Dois"
