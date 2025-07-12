const args = process.argv.slice(2);
let value = parseInt(args[0]);

function factorial() {
    let result = 1;
    for (let i = 2; i <= value; i++) {
        result *= i;
    }

    console.log(result);
}

factorial()
