const express = require("express")
const router = express.Router() 

//routers
router.get("/", (req, res) => {
  res.send("Project list main page")
})

module.exports = router;