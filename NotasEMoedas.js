var lines = [53.53]

var valorReal = Math.floor(lines[0] * 1);
console.log(((lines[0] * 1) - valorReal)*100)
var valorCentavos = Math.floor(((lines[0] * 1) - valorReal)*100)
console.log(valorCentavos)
var cem = 0;
var cinq = 0;
var vint = 0;
var dez = 0;
var cinc = 0;
var dois = 0;
var um = 0;
var cqct = 0;
var vtct = 0;
var dzct = 0;
var ccct = 0;
var umct = 0;

while(valorReal !== 0){
    if(valorReal/100 >= 1){
      cem = Math.floor(valorReal/100);
      valorReal -= 100*cem
    }else if(valorReal/50 >= 1){
      cinq = Math.floor(valorReal/50);
      valorReal -= 50*cinq
    }else if(valorReal/20 >= 1){
      vint = Math.floor(valorReal/20);
      valorReal -= 20*vint
    }else if(valorReal/10 >= 1){
      dez = Math.floor(valorReal/10);
      valorReal -= 10*dez
    }else if(valorReal/5 >= 1){
      cinc = Math.floor(valorReal/5);
      valorReal -= 5*cinc
    }else if(valorReal/2 >= 1){
      dois = Math.floor(valorReal/2);
      valorReal -= 2*dois
    }else if(valorReal/1 >= 1){
      um = Math.floor(valorReal/1);
      valorReal -= 1*um
    }
}

while(valorCentavos !== 0){
    if(valorCentavos/50 >= 1){
      cqct = Math.floor(valorCentavos/50);
      valorCentavos = Math.floor(valorCentavos - (50 * cqct))
    }else if(valorCentavos/25 >= 1){
      vtct = Math.floor(valorCentavos/25);
      valorCentavos = Math.floor(valorCentavos - (25 * vtct))
    }else if(valorCentavos/10 >= 1){
      dzct = Math.floor(valorCentavos/10);
      valorCentavos = Math.floor(valorCentavos - (10 * dzct))
    }else if(valorCentavos/5 >= 1){
      ccct = Math.floor(valorCentavos/5);
      valorCentavos = Math.floor(valorCentavos - (5 * ccct))
    }else if(valorCentavos >= 1){
      umct = Math.floor(valorCentavos/1);
      valorCentavos = Math.floor(valorCentavos - (1 * umct))
    }
}

console.log("NOTAS:");
console.log(`${cem} nota(s) de R$ 100,00`);
console.log(`${cinq} nota(s) de R$ 50,00`);
console.log(`${vint} nota(s) de R$ 20,00`);
console.log(`${dez} nota(s) de R$ 10,00`);
console.log(`${cinc} nota(s) de R$ 5,00`);
console.log(`${dois} nota(s) de R$ 2,00`);
console.log("MOEDAS:")
console.log(`${um} moeda(s) de R$ 1,00`);
console.log(`${cqct} moeda(s) de R$ 0,50`);
console.log(`${vtct} moeda(s) de R$ 0,20`);
console.log(`${dzct} moeda(s) de R$ 0,10`);
console.log(`${ccct} moeda(s) de R$ 0,05`);
console.log(`${umct} moeda(s) de R$ 0,01`);
console.log(0.73/0.5)
