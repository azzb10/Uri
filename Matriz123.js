var lines = ["3", "7"];
for(let m = 0; m < lines.length; m++){
  let x = lines[m];
  let y = lines[m];
  let arr = [];
  for(let j = 1; j <= y; j++){
    for(let i = 1; i<= x; i++){
      if(i+j == x + 1){
        arr.push(2)
      }else if(i == j){
        arr.push(1)
      }else{
        arr.push(3)
      }
    }
    console.log(arr.join(""))
    arr = []
  }
}
