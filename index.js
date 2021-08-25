// this is the Web Server
const express = require("express");
const app = express();

// create logs for everything
const morgan = require("morgan");
app.use(morgan("dev"));

// handle application/json requests
app.use(express.json());

// here's our static files
const path = require("path");
app.use(express.static(path.join(__dirname, "build")));

// CORS
const cors = require("cors");
app.use(cors());

// API
app.use("/api", require("./routes"));

// by default serve up the react app if we dont recognize the route
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// bring in the DB connection
const client = require("./db/client");

// connect to the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}!`);

  try {
    await client.connect();
    console.log("Database is open for business!");
  } catch (error) {
    console.error("Database is closed for repairs!\n", error);
  }
});
