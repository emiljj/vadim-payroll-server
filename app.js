const express = require('express');
const bodyParser = require('body-parser')
const payeeRouter = require('./routers/payee.router');
const connectDB = require('./db/connection');
const config = require('./config');
const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/payee', payeeRouter);

app.listen(config.appPort, () => {
  console.log(`Server running on port: ${config.appPort}`);
})