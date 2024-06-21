const contactModel = require("../models/contact-model");



/* ****************************************
*  Deliver login view
* *************************************** */
async function buildContact(req, res, next) {
  res.render("/contact", {
    title: "Contact",
  })
}
  
module.exports = {buildContact}
