let lines = ["5", "4", "3", "2", "-3"];

let pares= 0;

for(let i = 0; i < lines.length - 1; i++){
    if(lines[i] % 2 == 0 ){
        pares++;
    }
}

console.log(`${pares} valores pares`);
