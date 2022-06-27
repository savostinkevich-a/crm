import UserDto from "./user.dto";
import IUser from "../../_root/models/IUser";

class UserListDto {

    users: Array<UserDto> = []

    constructor(users: Array<IUser>) {
        users.forEach(user => {
            this.users.push(new UserDto(user))
        })
    }


}

export default UserListDto