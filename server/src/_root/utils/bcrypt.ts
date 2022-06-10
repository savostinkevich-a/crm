import bcrypt from "bcrypt"

export const hash = (password: string) => {
    return bcrypt.hashSync(password, 10)
}

export const compare = (password: string, hashedPassword: string) => {
    return bcrypt.compareSync(password, hashedPassword)
}