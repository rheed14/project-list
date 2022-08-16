const express= require("express")
const mongoose = require('mongoose')
const projectRouter = require('./routes/index.js')
const app = express()

// connect to mongodb
mongoose.connect("mongodb://localhost/projects", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// default stuff
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use(projectRouter);

// server
app.listen(3000, () => console.log("Listening on port: 3000"))