const express = require("express");
const router = express.Router();

// getting all the patients
router.get("/", (req, res) => {
  res.send("Hello World");
});

//getting one patient
router.get("/patients/:id", (req, res) => {
  res.send(`Getting one patient with id: ${req.params.id}`);
});
//creating a new patient
router.post("/patients", (req, res) => {
  res.send("Creating a new patient");
});

//updating a patient
router.patch("/patients/:id", (req, res) => {
  res.send(`Updating a patient with id: ${req.params.id}`);
});

//deleting a patient
router.delete("/patients/:id", (req, res) => {
  res.send(`Deleting a patient with id: ${req.params.id}`);
});

module.exports = router;
