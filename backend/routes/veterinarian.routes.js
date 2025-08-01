const express = require("express");
const router = express.Router();
const vetController = require("../controllers/veterinarian.controller");

router.post("/", vetController.create);
router.get("/", vetController.findAll);
router.get("/:id", vetController.findOne);
router.put("/:id", vetController.update);
router.delete("/:id", vetController.delete);

module.exports = router;