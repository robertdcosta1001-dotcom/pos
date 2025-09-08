const posModel = require('../models/posModel');

exports.getItems = async (req, res) => {
  try {
    const items = await posModel.getAllItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addItem = async (req, res) => {
  try {
    const { name, price } = req.body;
    const item = await posModel.addItem(name, price);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};