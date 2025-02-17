const express = require('express') ; 
const mongoose = require('mongoose') ; 
const userRouter = require('./routes/user.route') ; 
const authRouter = require('./routes/auth.route') ; 
const app = express() ;
 
const dotenv = require('dotenv') ; 
dotenv.config() ;

const mongoURI = process.env.MONGO_URI ; 
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

app.use(express.json())
app.use('/api/v1/user',userRouter)
app.use('/api/v1/auth',authRouter)

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}!!!`) ; 
})
