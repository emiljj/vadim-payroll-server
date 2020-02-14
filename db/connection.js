const mongoose = require('mongoose');
const config = require('../config');

const connectDB = () => {
  mongoose.connect(`mongodb://localhost:${config.dbPort}/payroll`, { useNewUrlParser: true });
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to the DB...');
  });
}
module.exports = connectDB;