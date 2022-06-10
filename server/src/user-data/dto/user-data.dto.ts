import IUserData from "../../_root/models/IUserData";

class UserDataDto {

    firstName: string
    lastName: string
    avatar: string

    constructor(userData: IUserData) {
        this.avatar = userData.avatar
        this.firstName = userData.firstName
        this.lastName = userData.lastName
    }

}

export default UserDataDto