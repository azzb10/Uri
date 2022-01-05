let lines = ["16", "2"];
let inicio = lines[0]*1;
let fim = lines[0]*1 > lines[1]*1 ? 24 + lines[1]*1 : lines[1]*1;

if(lines[0] == lines[1]){
  console.log("O JOGO DUROU 24 HORA(S)")
}else{
  console.log(`O JOGO DUROU ${Math.abs(inicio - fim)} HORA(S)`)
}
