const express = require("express");

const { UserController, SponsorController } = require("./controllers");

const router = express.Router();
const { authorization } = require("./middlewares/authMiddleware");
const { isAdmin } = require("./middlewares/isAdminMiddleware");

router.get("/sponsors", SponsorController.browse);
router.get("/sponsors/:id", SponsorController.read);

/* BACKEND pr rajouter un sponsor */
router.post("/sponsors", SponsorController.add);

router.get("/users", authorization, isAdmin, UserController.browse);
router.post("/users/login", UserController.login);

module.exports = router;
