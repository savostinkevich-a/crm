import {hash} from "../_root/utils/bcrypt";
import UserModel from "../user/user.models";
import TaskModel from "../task/task.model";

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/crm').catch((error: any) => {console.log(error)} );
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const users: Array<UserSeed> = require("../../files/users.json");
const tasks: Array<TaskSeed> = require("../../files/tasks.json");

interface UserSeed {
    firstName: string,
    lastName: string,
    email: string,
    username: string
}
interface TaskSeed {
    firstName: string,
    lastName: string,
    email: string,
    username: string
}


const seedUsers = async () => {
    const password = hash("password")
    for (const user of users) {
        const exists = await UserModel.findOne({username: user.username}).exec()
        if (!exists) {
            const withPassword = {...user, password}
            await new UserModel(withPassword).save()
        }
    }
}

const seedTasks = async () => {
    const dbUsers = await UserModel.find().exec();
    for (const task of tasks) {
        const tasking = dbUsers[Math.floor(Math.random()*dbUsers.length)]._id;
        const performer = dbUsers[Math.floor(Math.random()*dbUsers.length)]._id;

        const fullTask = {...task, performer, tasking}
        await new TaskModel(fullTask).save()
    }
}

const seed = async () => {
    await seedUsers();
    await seedTasks();
}

seed().then(() => {process.exit(0)})

