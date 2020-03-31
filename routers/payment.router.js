const { Router } = require('express');
const Payment = require('../db/models/payment');

const paymentRouter = Router();

paymentRouter.get('/', async (req, res) => {
  const result = await Payment.find();
  res.send(result);
  console.log(result);
});

paymentRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Payment.findById(id);
  res.send(result);
});

paymentRouter.post('/', async (req, res) => {
  const company = { ...req.body };
  const result = await Payment.create(company);
  res.send(result);
});

paymentRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Payment.findByIdAndUpdate(id, req.body);
  res.send(result);
});

paymentRouter.delete('/:id', async (req, res) => {
  const paramsId = req.params.id;
  const result = await Payment.findOneAndDelete({ _id: paramsId });
  const id = result._id;
  res.send(id);
});

module.exports = paymentRouter;
