const { Schema, model } = require('mongoose');

const payeeSchema = new Schema({
  name: Schema.Types.String,
  age: Schema.Types.Number,
});

const Payee = model('payee', payeeSchema);

module.exports = Payee;