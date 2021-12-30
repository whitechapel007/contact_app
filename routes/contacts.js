const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");

//@route GET api/contacts
//@desc get all users contacts
//@access private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

//@route POST api/contacts
//@desc get all users contacts
//@access private
router.post("/", auth, (req, res) => {});

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
