const x = [0,1,2,3];

function isGreaterThanOne(num){
  return(num > 1)
}

const y = x.filter(isGreaterThanOne);

console.log(y)
