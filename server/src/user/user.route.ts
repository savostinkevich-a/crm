import express, {Router} from "express";
import {dbPromise} from "../_root/utils/middlewares";
import UserActions from "./user.actions";
import GetByIdParams from "./params/get-by-id.params";


const router: Router = express.Router()

router.get("/", dbPromise(async ({token, response}) => (await UserActions.get(token, response))))

router.get("/:id",
    dbPromise<any, GetByIdParams>(
        async ({token, response, params
               }) => (await UserActions.getById(token, params, response))))

module.exports = router