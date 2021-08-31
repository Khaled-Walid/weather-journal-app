//Empty JS object to act as endpoint for all routes
let projectData = {};

// Requires Express to run server and routes
const express = require("express");
const cors = require("cors");
// Starts up an instance of app
const app = express();

/* Middleware*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Cors for cross origin allowance
app.use(cors());
// Initializes the main project folder
app.use(express.static("website"));

// Setup Server
//Handles GET requests
app.get("/entries", (req, res) => {
  res.send(projectData);
  res.end();
});

//Handles POST requests
app.post("/add-entry", (req, res) => {
  projectData = req.body;
  res.send(projectData);
  res.end();
});

//Initiates the server on port 8000
app.listen(8000, () => {
  console.log("Server is running!");
});
