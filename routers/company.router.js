const { Router } = require('express');
const jwt = require('jsonwebtoken');
const Company = require('../db/models/company');
const config = require('../config');

const companyRouter = Router();

companyRouter.get('/', async (req, res) => {
  const result = await Company.find();
  res.send(result);
  console.log(result);
});

companyRouter.post('/login-admin', async (req, res) => {
  const { companyId, password } = req.body;
  const company = await Company.findById(companyId);

  if (!company) {
    return res.status(400).send('Wrong companyId');
  }
  if (company.password !== password) {
    return res.status(400).send('Wrong password');
  }

  const token = jwt.sign({ ...company }, config.secretKey);
  return res.send({ company, token });
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
