const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = mongoose => {
  const productSchema = mongoose.Schema({
    enabled: {
      type: Boolean,
      default: true,
    },
    productName: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
    },
    status: {
      type: String,
      default: "available",
    },
  });

  const Product = mongoose.model('products', productSchema);
  return Product;
};