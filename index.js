const { Input } = require('./lib/Input.js');
const { Note } = require('./lib/Notes.js');

let parsedArray = new Input(process.argv);
let response;

if(parsedArray.isValid()) {
    response = Note.execute(parsedArray);
} else {
    console.log('try again');
}

console.log(response);
console.log(parsedArray);