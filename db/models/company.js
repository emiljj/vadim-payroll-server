const { Schema, model } = require('mongoose');

const companySchema = new Schema({
  balance: Schema.Types.Number,
  address: Schema.Types.String,
  phone: Schema.Types.String,
  email: Schema.Types.String,
  countOfPayees: Schema.Types.Number,
  name: Schema.Types.String,
  password: Schema.Types.String,
});

const Company = model('company', companySchema);

module.exports = Company;
