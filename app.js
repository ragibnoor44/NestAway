const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/NestAway";

main()
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Hi, I am Root");
});

app.get("/listings", async (req, res) => {
 const allListing = await Listing.find({});
  res.render("listings/index.ejs", {allListing});
});

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Kolkata, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("Sample was Saved");
//   res.send("Successful Testing");
// });

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
