const express = require('express');
const app = express();

//Import routes
const authRoute = require('./routes/auth');




//Routes middleware
app.use('/api/user', authRoute);



app.listen(8080, () => console.log(`Server started in port 8080.`));