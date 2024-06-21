// Needed Resources 
const express = require("express")
const router = new express.Router()


router.get("/", (req, res) => {
  res.send('Backend Programming would have been easier <br> if there was a straightforward description. <br> Most times I am depressed taking this course');
});

router.use('/users', require('./users'));




module.exports = router;