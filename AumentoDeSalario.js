let lines = ["2400.00"];
let salario = lines[0]*1;

let reajuste = {
  1: 0.15,
  2: 0.12,
  3: 0.1,
  4: 0.07,
  5: 0.07,
  6: 0.04
}

let multiplicador = Math.ceil(lines[0]/400) >= 6 ? 6 : Math.ceil(lines[0]/400);
let reajusteGanho = lines[0]*reajuste[multiplicador];
let novoSalario = salario + reajusteGanho;
let porcentagem = reajuste[multiplicador] * 100;
console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajusteGanho.toFixed(2)}`);
console.log(`Em percentual: ${porcentagem} %`);
