const lines = ["2.0 4.0 8.5 9.0", "6.5"]; // 2 3 4 1
const lines1 = lines[0].split(" ");
let media = 0
for(let i = 0; i < 3; i++){
  media += lines1[i] * (i + 2)
}
media += lines1[3]*1;
media /= 10;
media = media.toFixed(1)
console.log(`Media: ${media}`)
if(media >= 5 && media <= 6.9){
  media = (media*1 + lines[1]* 1)/2;
  media = media.toFixed(1)
  console.log("Aluno em exame.");
  console.log(`Nota do exame: ${lines[1]}`);
  if(media >= 5){
    console.log("Aluno aprovado.")
  }else{
    console.log("Aluno reprovado.")
  }
  console.log(`Media final: ${media}`)
}else if(media < 5){
  console.log("Aluno reprovado.")
}else{
  console.log("Aluno aprovado.")
}
