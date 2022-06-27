import express, {Router} from "express";
import {dbPromise} from "../_root/utils/middlewares";
import CreateTaskInput from "./input/create-task.input";
import TaskActions from "./task.actions";
import GetTasksInput from "./input/get-tasks.input";
import TasksPaginationQuery from "./query/tasks-pagination.query";
import GetByIdParams from "./params/get-by-id.params";

const router: Router = express.Router()

router.post("/", dbPromise<GetTasksInput, any, TasksPaginationQuery>(async ({input, query}) =>
   (await TaskActions.get(input, query))
))
router.get("/:id", dbPromise<any, GetByIdParams>( async ({params}) => (await TaskActions.getById(params))))
router.post("/create", dbPromise<CreateTaskInput>(async ({input}) =>
    (await TaskActions.create(input))
))

module.exports = router