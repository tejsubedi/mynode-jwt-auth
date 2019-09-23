const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();


//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
{ useUnifiedTopology: true, useNewUrlParser: true },
()=> console.log('connected to db'));

//Import routes
const authRoute = require('./routes/auth');




//Routes middleware
app.use('/api/user', authRoute);



app.listen(8080, () => console.log(`Server started in port 8080.`));