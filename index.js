const { parse, isValid } = require('./lib/input.js');
const { execute } = require('./lib/notes.js');

let parsedArray = parse(process.argv);
let response;

if(isValid(parsedArray)) {
    response = execute(parsedArray);
}

console.log(response);
console.log(parsedArray)