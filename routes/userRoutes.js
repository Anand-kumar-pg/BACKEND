const express = require("express");
const { login, register,getUsers, lo } = require("../controllers/userControllers");
const { checkWebToken } = require("../middleWare/auth");

const router = express.Router();

router.route("/signin").post(login);
router.route("/register").post(register);
router.route("/get-users").get(checkWebToken,getUsers);

module.exports = router;