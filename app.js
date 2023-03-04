const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  "origin": "https://bookkeepingstore1.onrender.com",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
));
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://Sheethal:sheethal@cluster0.qkgnpli.mongodb.net/bookshelfDB?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));