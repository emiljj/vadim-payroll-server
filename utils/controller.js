const controller = (callback, errorHandler) => async (req, res) => {
  try {
    const result = await callback(req, res);
    res.send(result)
  } catch (error) {
    res.error(error);
  }
}

module.exports = controller;