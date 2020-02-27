const controller = (callback) => async (req, res) => {
  try {
    const result = await callback(req, res);
    res.send(result);
  } catch (error) {
    res.error(error);
  }
};

module.exports = controller;
