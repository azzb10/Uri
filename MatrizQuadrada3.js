let x = 7;
let y = 7;
let arr = [];
let str = "";
let limit = str+((2**(x-1))*(2**(y-1)));
for(let m = 0; m<limit.length; m++){
  str += " ";
}
console.log(limit);
for(let j = 0; j < y; j++){
  for(let i = 0; i< x; i++){
      let num = ((2**i)*(2**j));
      arr.push((str + num).slice(-str.length));
  }
  console.log(arr.join(" "))
  arr = []
}
