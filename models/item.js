const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    itemType: { type: String, required: [true, "item type required"] },
    itemName: { type: String, maxLen: [15, "item name less than 15 char"] },
    subCategory: [String],
    uniName: [String],
    stockLimit: Number
}
);

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;