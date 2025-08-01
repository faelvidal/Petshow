const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animal.controller");

router.post("/", animalController.create);
router.get("/", animalController.findAll);
router.get("/:id", animalController.findOne);
router.put("/:id", animalController.update);
router.delete("/:id", animalController.delete);

module.exports = router;