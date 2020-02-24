const { Router } = require('express');
const Payee = require('../db/models/payee');

const payeeRouter = Router();

payeeRouter.get('/', async (req, res) => {
  const result = await Payee.find();
  res.send(result);
});

payeeRouter.post('/', async (req, res) => {
  const result = await Payee.create(req.body);
  res.send(result);
});

payeeRouter.put('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await Payee.findByIdAndUpdate(id,req.body);
  res.send(result);
});

payeeRouter.delete('/:id', async (req, res) => {
  const paramsId = req.params.id;
  const result = await Payee.findOneAndDelete({ _id: paramsId });
  const id = result.id;
  res.send(id);
});

module.exports = payeeRouter;