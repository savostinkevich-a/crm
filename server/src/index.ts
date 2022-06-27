import express, {Express} from 'express';

const mongoose = require("mongoose");
const cors = require('cors')
const app: Express = express();
const cookieParser = require('cookie-parser')
const port = 5000;

app.use(cookieParser())

const corsConfig = {
    origin: true,
    credentials: true,
};

app.use(cors(corsConfig));
app.options('*', cors(corsConfig));

mongoose.connect('mongodb://localhost:27017/crm').catch((error: any) => {console.log(error)} );
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const authRoute = require("./auth/auth.route")
const userRoute = require("./user/user.route")
const taskRoute = require("./task/task.route")

app.use(express.json())
app.use("/auth", authRoute)
app.use("/user", userRoute)
app.use("/task", taskRoute)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});