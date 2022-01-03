var lines = ["576"]

var valor = lines[0] * 1;
var cem = 0;
var cinq = 0;
var vint = 0;
var dez = 0;
var cinc = 0;
var dois = 0;
var um = 0;

while(valor !== 0){
    if(valor/100 >= 1){
      cem = Math.floor(valor/100);
      valor -= 100*cem
    }else if(valor/50 >= 1){
      cinq = Math.floor(valor/50);
      valor -= 50*cinq
    }else if(valor/20 >= 1){
      vint = Math.floor(valor/20);
      valor -= 20*vint
    }else if(valor/10 >= 1){
      dez = Math.floor(valor/10);
      valor -= 10*dez
    }else if(valor/5 >= 1){
      cinc = Math.floor(valor/5);
      valor -= 5*cinc
    }else if(valor/2 >= 1){
      dois = Math.floor(valor/2);
      valor -= 2*dois
    }else if(valor/1 >= 1){
      um = Math.floor(valor/1);
      valor -= 1*um
    }
}

console.log(lines[0]);
console.log(`${cem} nota(s) de R$ 100,00`);
console.log(`${cinq} nota(s) de R$ 50,00`);
console.log(`${vint} nota(s) de R$ 20,00`);
console.log(`${dez} nota(s) de R$ 10,00`);
console.log(`${cinc} nota(s) de R$ 5,00`);
console.log(`${dois} nota(s) de R$ 2,00`);
console.log(`${um} nota(s) de R$ 1,00`);
