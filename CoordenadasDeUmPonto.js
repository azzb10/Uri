let lines = ["-2.2","0.0"];
let hyp = Math.hypot(lines[1],lines[0]);
let sin = lines[1]/hyp;
let cos = lines[0]/hyp;
let tg = sin/cos;
let cop = lines[1];
let cad = lines[0];
console.log(sin, cos, tg)

if(tg > 0 && tg != Infinity){
  if(sin>0){
    console.log("Q1")
  }else{
    console.log("Q3")
  }
}else if(tg<0 && tg != -Infinity){
  if(sin>0){
    console.log("Q2")
  }else{
    console.log("Q4")
  }
} else {
  if(cop == 0){
    if(cad == 0){
      console.log("Origem")
    }else{
      console.log("Eixo X")
    }
  }else{
    console.log("Eixo Y")
  }
}
