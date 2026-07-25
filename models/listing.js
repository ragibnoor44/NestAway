const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    default: "/images/image1.jpg",
    type: String,
    set: (v) => v === "" ? "/images/image1.jpg" : v,
  },
  price: Number,
  location: String,
  country: String,
});

const listing = mongoose.model("Listing", listingSchema);
module.exports = listing;
