// Our router module
const router = require("express").Router();

// Our controller
const ArcadeGamesController = require("../controllers/arcadegamesController");

// Our routes

router.get("/", ArcadeGamesController.index);
router.get("/new", ArcadeGamesController.new);
router.get("/:id", ArcadeGamesController.show);
router.get("/:id/edit", ArcadeGamesController.edit);
router.post("/", ArcadeGamesController.create);
router.post("/update", ArcadeGamesController.update);
router.post("/destroy", ArcadeGamesController.destroy);

// We have to export our changes
module.exports = router;
