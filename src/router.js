const express = require("express");
const router = express.Router();
const DashboardController = require("./controller/DashboardController");

router.get("/", DashboardController.index);
router.post("/", DashboardController.post);
router.get("/delete/:id", DashboardController.delete);

module.exports = router;
