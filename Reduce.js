const x = [0, 1, 2, 3];

function add(x, y){
  return x + y
};

const y =  x.reduce(add);

console.log(y);
