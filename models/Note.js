
const mongoose  = require('mongoose');

const note_schema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
});

const Note = mongoose.model('Note', note_schema);
/*
const note = new Note({
    content: 'Mongose note 1',
    date: new Date(),
    important: true
});

note.save()
    .then((result) =>{
        console.log(result);
        mongoose.connection.close();
    }).catch((error)=>{
        console.error(error)
    })
*/
module.exports = Note