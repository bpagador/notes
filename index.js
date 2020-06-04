const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/notes', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})


const{ Input } = require('./lib/Input.js');
const Note = require('./lib/models/Note.js');

let parsedArray = new Input(process.argv);
let response;

console.log(parsedArray.isValid())

if(parsedArray.isValid()) {
    response = Note.execute(parsedArray);
} else {
    console.log('try again');
}


// const minimist = require('minimist')

// console.log(minimist(process.argv))