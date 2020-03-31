const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
  total: Schema.Types.Number,
  numberOfPayees: Schema.Types.Number,
  companyBalance: Schema.Types.Number,
}, { timestamps: true });


const Payment = model('payment', paymentSchema);

module.exports = Payment;
