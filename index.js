const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const port = process.env.PORT || 8000
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/auth')
const app   = express();
dotenv.config();
mongoose.connect("mongodb://localhost:27017/socailmedia", 
{useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
mongoose.connection.once('open', () => {
    console.log('connected to mongodb...')
} )
//middleware
app.use(express.json())
app.use(helmet());
app.use(morgan('common'));

app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)



app.listen(port, () => {
    console.log(`the server is runnning at ${port}`)
})