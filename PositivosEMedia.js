let lines = ["7", "-5", "6", "-3.4", "4.6", "12", ""];
let count = 0
let sum = 0

for (let i = 0; i < lines.length - 1; i++) {
  if (lines[i] >= 0) {
    count++
    sum += lines[i]*1
  }
}

console.log(`${count} valores positivos`);
console.log((sum/count).toFixed(1));
