let x = 3;
let y = 3;
let arr = [];
for(let j = 1; j <= y; j++){
  for(let i = 1; i<= x; i++){
    arr.push(Math.abs(i-j)+1)
  }
  console.log(arr.join(" "))
  arr = []
}
