const { Router } = require('express');
const Company = require('../db/models/company');

const companyRouter = Router();

companyRouter.get('/', async (req, res) => {
  const result = await Company.find();
  res.send(result);
  console.log(result);
});

companyRouter.post('/login-admin/:id', async (req, res) => {
  const company = { ...req.body };
  console.log('sfssf', company);
  const result = await Company.create(company);
  res.send(console.log(result));
});

companyRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Company.findById(id);
  res.send(result);
});

companyRouter.post('/', async (req, res) => {
  const company = { ...req.body };
  const result = await Company.create(company);
  res.send(result);
});

companyRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Company.findByIdAndUpdate(id, req.body);
  res.send(result);
});

companyRouter.delete('/:id', async (req, res) => {
  const paramsId = req.params.id;
  const result = await Company.findOneAndDelete({ _id: paramsId });
  const id = result._id;
  res.send(id);
});

module.exports = companyRouter;
