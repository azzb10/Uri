let lines = ["1701.12"];
let salario = lines[0]*1;
salario -= 2000
let irs = 0;

let impostos = {
  1: 0.08,
  2: 0.18,
  3: 0.28
}
if(salario > 0){
  for (let i = 1; i < 3; i++) {
    if(salario - 500*(i+1) < 0){
      irs += salario*impostos[i]
      salario = 0;
      break;
    }else{
      irs += 500*(i+1)*impostos[i]
      salario -= 500*(i+1);
    }
  }
  if(salario > 0){
    irs += salario*impostos[3];
  }
  console.log(`R$ ${irs.toFixed(2)}`)
}else{
  console.log("Isento")
}
