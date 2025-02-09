const express = require('express') ; 
const mongoose = require('mongoose') ; 

const app = express() ;

const dotenv = require('dotenv') ; 
dotenv.config() ;

const mongoURI = process.env.MONGOURI ; 
const port = process.env.PORT ; 

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(mongoURI,options)
.then(()=> {
    console.log('Connected to MongoDB'); 
})
.catch((error)=>{
    console.log('Error connecting to MongoDB',error.message) ; 
})

 
 
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}!!!`) ; 
})
