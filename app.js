const express = require('express');
const app = express();

const indexRoute = require('./routes/index');
const usersRoutes = require('./routes/users')

app.use('/',indexRoute);
app.use('/users',usersRoutes);


app.listen(3000);

module.exports = app; 