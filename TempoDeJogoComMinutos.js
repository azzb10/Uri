let lines = ["11", "0", "0", "43"];
let inicio = lines[0]*1;
let fim = lines[0]*1 > lines[2]*1 ? 24 + lines[2]*1 : lines[2]*1;
fim = lines[0]*1 == lines[2]*1 && lines[1] >= lines[3] ? 24 + lines[2]*1 : fim;
let minInicio = lines[1]*1;
let minFim = lines[3]*1;
if(minInicio>minFim){
  fim -= 1;
  minFim += 60;
}


if(lines[0]+lines[1] == lines[2]+lines[3]){
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
}else{
  console.log(`O JOGO DUROU ${Math.abs(inicio - fim)} HORA(S) E ${Math.abs(minInicio - minFim)} MINUTO(S)`);
}
