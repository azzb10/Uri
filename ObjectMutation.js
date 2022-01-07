//Nessa parte eu to fazendo uma cópia de um objeto com um objeto aninhado.
//Como objetos no javascript são passados por referência e não por valor então
//alguns problemas podem acontecer por causa disso, por exemplo:

const person = {
  firstName: "Alisson",
  lastName: "Emidio",
  age: 26,
  address: {
    street: "Rua Principal",
    numero: 50
  }
};

const person2 = person; //Agora o person2 é uma copia de person com as mesmas chaves e valores
person2.age = 22; //Aqui estou alterando a idade da pessoa2 para 22 anos porem isso acontece

console.log(person.age); // 22
//Isso acontece porque os dois estão apontando para o mesmo lugar, as referencias de person e person2 são as mesmas
//Então se eu altero de um vai alterar o do outro também.

person.age = 25; //Voltando age de person para 25, porém alterando a age de person2 pra 25 também.

//Pra contornar essa situação você tem que criar um objeto person2 e passar uma copia dos valores e chaves de person
//Não só a referência e pra isso pode usar o Object.assign({}, person)

const person3 = Object.assign({}, person)
person3.age = 30; //Dessa vez eu só alterei a idade da pessoa 3.

console.log(person.age); // 25

//Porém temos um outro problema, quando vamos alterar o objeto address dentro de
//um dos objetos person, vai alterar de todos porque estão todos apontando para
//a mesma referência entre si, por exemplo:

person3.address.street = "Rua Três"; //Mudei a rua do address de person3 para Rua Três porém também alterei de todos os outros

console.log(person.address.street, person2.address.street) // Rua Três Rua Três

person.address.street = "Rua Principal"; //Voltando todas streets pra Rua Principal.

//Então quando tiver objetos aninhados, ou seja, objetos dentro de objetos a gente pode fazer uma função recursiva pra resolver.

const deepCopy = (obj) => {
  //Essa função vai verificar cada chave do objeto e ver se o valor também é um objeto.
  //Se for, fazer um "deepCopy" do objeto.
  //Se não for, retornar a chave.
  const keys = Object.keys(obj);//Object.keys() é a função que pega todas as chaves do objeto. Nesse caso estou atribuindo à keys.
  const newObject = {};//Criando o novo objeto que vai ser retornado.

  for(let i = 0; i < keys.length; i++){ //Passando por cada chave pra verificar se seu valor é um objeto.
    const key = keys[i];
    if(typeof obj[key] === 'object'){//Se o valor de obj[key] for um objeto.
      newObject[key] = deepCopy(obj[key]);//Chamo a função deepCopy nesse objeto.
    }else{
      newObject[key] = obj[key];//Se não for simplesmente atribuo esse valor à chave key atual do loop.
    }
  }

  return newObject; //Por fim retorno o novo objeto com as mesmas chaves e valores do objeto passado, 
                    //sem objetos compartilhando a mesma referência.
}

const person4 = deepCopy(person);
person4.address.street = "Rua Quatro"

console.log(person.address.street, person4.address.street) // "Rua Principal" "Rua Quatro"
