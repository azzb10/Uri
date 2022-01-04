let lines = ["3", "2"];

const lanche = {
  1: 4,
  2: 4.5,
  3: 5,
  4: 2,
  5: 1.5,
}

console.log(`Total: R$ ${(lanche[lines[0]]*lines[1]).toFixed(2)}`)
