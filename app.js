const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const jwt = require('express-jwt');
const payeeRouter = require('./routers/payee.router');
const paymentRouter = require('./routers/payment.router');
const companyRouter = require('./routers/company.router');
const connectDB = require('./db/connection');
const config = require('./config');

const app = express();

connectDB();

app.use(cors('*'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/payee', payeeRouter);
app.use('/payment', paymentRouter);
// app.use(jwt({ secret: config.secretKey }));
app.use('/company', companyRouter);

app.listen(config.appPort, () => {
  console.log(`Server running on port: ${config.appPort}`);
});
