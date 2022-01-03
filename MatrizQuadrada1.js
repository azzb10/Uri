let x = 3;
let y = 3;
let arr = [];
for(let j = 1; j <= y; j++){
  for(let i = 1; i<= x; i++){
    arr.push(Math.min(Math.min(y - j + 1, j), Math.min(x - i + 1, i)))
  }
  console.log(arr.join(" "))
  arr = []
}
