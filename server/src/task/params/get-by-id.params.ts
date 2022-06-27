import {Types} from "mongoose";

interface GetByIdParams {
    id: Types.ObjectId | string
}

export default GetByIdParams