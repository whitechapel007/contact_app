const express = require("express");
const router = express.Router();

//@route GET api/contacts
//@desc get all users contacts
//@access private
router.get("/", (req, res) => {
  res.send("get all contacts");
});

//@route POST api/contacts
//@desc get all users contacts
//@access private
router.post("/", (req, res) => {
    res.send("add contacts");
  });

  //@route PUT api/contacts/:id
//@desc get  user contact
//@access private
router.put("/:id", (req, res) => {
    res.send("update contact");
  });

  //@route DELETE api/contacts
//@desc delete contacts
//@access private
router.delete("/", (req, res) => {
    res.send("add contacts");
  });
module.exports = router;