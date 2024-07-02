// Needed Resources 
const express = require("express")
const router = new express.Router()
const swaggerDocument = require('../swagger.json');

router.use('/', require('./swagger'));

router.get("/", (req, res) => {
  //#swagger.tags = ['Hello World']
  res.send('Backend Programming would have been easier <br> if there was a straightforward description. <br> Most times I am depressed taking this course');
});

router.use('/users', require('./users'));




module.exports = router;