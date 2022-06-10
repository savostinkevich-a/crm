import express, {Router} from "express";
import {dbPromise} from "../_root/utils/middlewares";
import UpdateUserDataInput from "./input/update-user-data.input";
import UserDataActions from "./user-data.actions";

const router: Router = express.Router()

router.post("/update",
    dbPromise<UpdateUserDataInput>(
        async ({input, token, response}) =>
            (await UserDataActions.updateUserData(input, token, response))))


module.exports = router