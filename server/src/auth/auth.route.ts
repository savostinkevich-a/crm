import express, {Router} from "express";
import AuthActions from "./auth.actions";
import LoginInput from "./input/login.input";
import {dbPromise} from "../_root/utils/middlewares";
import RegisterInput from "./input/register.input";

const fs = require("fs");

const router: Router = express.Router()

router.post("/login", dbPromise<LoginInput>(async ({input, response}) => (await AuthActions.login(input, response))))
router.post("/register", dbPromise<RegisterInput>(async ({input}) => (await AuthActions.register(input))))
router.get("/me", dbPromise(async ({token}) => (await AuthActions.me(token))))

module.exports = router
