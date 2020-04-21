const { Schema, model } = require('mongoose');

const payeeSchema = new Schema({
  firstName: Schema.Types.String,
  lastName: Schema.Types.String,
  jobTitle: Schema.Types.String,
  email: Schema.Types.String,
  address: Schema.Types.String,
  roles: [Schema.Types.String],
  age: Schema.Types.Number,
  withHoldingTax: Schema.Types.Number,
  active: Schema.Types.Boolean,
  salary: Schema.Types.Number,
  country: Schema.Types.String,
  city: Schema.Types.String,
  socialProfileLink: Schema.Types.String,
  cardNumber: Schema.Types.String,
});

const Payee = model('payee', payeeSchema);

module.exports = Payee;
