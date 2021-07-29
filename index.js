
//const { request } = require('express');class
const { response, request } = require('express');
const express = require('express');
const cors = require('cors');
const logger = require('./loggerMiddleware');

const app = express();
app.use(express.json());
//const http = require('http');

let notes = [
    {
      id: 1,
      content: 'HTML is easy and awesome',
      date: '2019-05-30T17:30:31.098Z',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true
    }
]

app.use(cors);
app.use(logger);

app.get('/', (req, response) =>{
  response.send('<h1>Hola mundo </h1>');
});

app.get('/api/notes', (req, response) =>{
  response.json(notes);
});

app.get('/api/notes/:id', (request, response) =>{
  const id = Number(request.params.id);
  const note = notes.find(note => note.id === id);

  if(note){
    response.json(note);
  }  
  else{
    response.status(400).end();
  }
});

app.post('/api/notes', (request, response) =>{
  const note = request.body.content;
  const ids = notes.map(note => note.id);
  const maxId = Math.max(...ids);
  const newNote = {
    id: maxId + 1,
    content:note,
    important: false
  }
  notes = [...notes, newNote];
  response.json(newNote);
});

app.delete('/api/notes/:id', (request, response) =>{
  const id = Number(request.params.id);
  notes = notes.find(note => note.id !== id);
  response.status(204).end();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>{
  console.log(`Servwer running on PORT ${PORT}`);
});
