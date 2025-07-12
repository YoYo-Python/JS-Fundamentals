const args = process.argv.slice(2);
let value = parseInt(args[0]);

let result = 1;
for (let i = 2; i <= value; i++) {
    result *= i;
}

console.log(result);