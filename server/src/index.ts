import express, {Express} from 'express';

const mongoose = require("mongoose");
const cors = require('cors')
const app: Express = express();
const cookieParser = require('cookie-parser')
const port = 5000;

app.use(cookieParser())
app.use(cors("*"))

mongoose.connect('mongodb://localhost:27017/crm').catch((error: any) => {console.log(error)} );
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const authRoute = require("./auth/auth.route")
const userDataRoute = require("./user-data/user-data.route")
const userRoute = require("./user/user.route")

app.use(express.json())
app.use("/auth", authRoute)
app.use("/user-data", userDataRoute)
app.use("/user", userRoute)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});