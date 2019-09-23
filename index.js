const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Import routes
const authRoute = require('./routes/auth');
dotenv.config();


//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
{ useUnifiedTopology: true, useNewUrlParser: true },
()=> console.log('connected to db'));

//Middleware
app.use(express.json());


//Routes middleware
app.use('/api/user', authRoute);



app.listen(8080, () => console.log(`Server started in port 8080.`));