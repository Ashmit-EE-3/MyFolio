const express = require('express') ; 
const mongoose = require('mongoose') ; 
const userRouter = require('./routes/user.route') ; 
const authRouter = require('./routes/auth.route') ; 
const profileRouter = require('./routes/profile.route') ;
const projectRouter = require('./routes/project.route') ;
const socialRouter = require('./routes/social.route') ;
const usernameRouter = require('./routes/username.route') ; 
const resumeRouter = require('./routes/resume.route') ; 
 
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
app.use('/api/v1/profile',profileRouter)
app.use('/api/v1/project',projectRouter)
app.use('/api/v1/social',socialRouter)
app.use('/api/v1/username',usernameRouter)
app.use('/api/v1/resume',resumeRouter) ; 

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}!!!`) ; 
})