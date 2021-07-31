
const mongoose  = require('mongoose');
const connection_string = `mongodb+srv://test_demo:chicoArana156@test.igazc.mongodb.net/demo_db?retryWrites=true&w=majority`;

//connexion a mongodb

const mongo = mongoose.connect(connection_string,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() =>{
    console.log('Database connected')
}).catch((err)=>{
    console.log(err)
})
