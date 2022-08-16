const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
  project: {
    type: String,
    required: true,

  }
})

module.exports = new mongoose.model("Project", projectSchema)