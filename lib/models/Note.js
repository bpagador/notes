const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    }
});

noteSchema.statics.execute = function (action) {
    if (action.type === 'add') {
        
        return this.create({
            text: action.payload,
        });

    } else if(action.type === 'list') {
        return this.find()
        .lean()
        .then(notes => {
            console.log(notes)
            return notes;
        })

    } else if(action.type === 'delete') {
        console.log(action.payload, 'in delete')
        return this.findByIdAndDelete(action.payload)
        .then(note => {
            console.log(`Note deleted: ${note.text}`);
            return note;
        })
    }
}

module.exports = mongoose.model('Note', noteSchema);
