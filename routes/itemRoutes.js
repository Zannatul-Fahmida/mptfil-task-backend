const express = require("express");
const itemModel = require("../models/item");
const app = express();

app.get("/items", async (req, res) => {
  const items = await itemModel.find({});
  try {
    res.json(items);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/item/:id", async (req, res) => {
  const item = await itemModel.findOne({ _id: req.params.id });
  try {
    res.json(item);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/item", async (req, res) => {
  const item = new itemModel(req.body);

  try {
    await item.save();
    res.json(item);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.patch("/item/:id", async (req, res) => {
  try {
    await itemModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    await itemModel.save();
    res.json(item);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.delete("/item/:id", async (req, res) => {
  try {
    const item = await itemModel.findByIdAndDelete({ _id: req.params.id });
    if (!item) res.status(404).json("No item found");
    res.status(200).json();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = app;