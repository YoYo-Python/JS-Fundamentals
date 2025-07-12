const args = process.argv.slice(2);

let containsLetter = /[a-zA-Z]/.test(args[0]);

if (args[0] == undefined || containsLetter){
    console.log('Missing size')
}





for (let i = 0; i < args[0]; i++){
    console.log('X'.repeat(args[0]))
}