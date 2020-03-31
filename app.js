const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport-jwt');
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
app.use('/company', companyRouter);
app.use(passport.initialize());
require('./middleware/passport')(passport);

app.listen(config.appPort, () => {
  console.log(`Server running on port: ${config.appPort}`);
});
