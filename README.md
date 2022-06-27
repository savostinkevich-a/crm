# CRM

## SERVER

__yarn dev__ - start development server  
__yarn seed__ - seed database with users and tasks

## auth

### /register

POST

```
{
    "username": string (unique)
    "password": string
    "email": string (unique)
    "firstName": string | null
    "lastName": string | null
    "avatar": string | null
}
```

__Response__  
Success (status code 200)

```json
{
  "_id": "62b9bfd77e6cd7e9b6a55dfe",
  "username": "user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYyYjliZmQ3N2U2Y2Q3ZTliNmE1NWRmZSIsInVzZXJuYW1lIjoidXNlciJ9LCJpYXQiOjE2NTYzNDM2MDYsImV4cCI6MTY1ODkzNTYwNn0._EPX6gUTsFcHBAXwhYqA8u05zeshA4XPuBMPtJXOrHw"
}
```

Error (status code 400)

```json
{
  "message": "Username user is unavailable"
}
```

```json
{
  "message": "User with email your-email@gmail.com is already exists"
}
```

### /login

POST

```
{
    "username": string
    "password": string
}
```

__Response__  
Success (status code 200)

```json
{
  "_id": "62b9bfd77e6cd7e9b6a55dfe",
  "username": "user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYyYjliZmQ3N2U2Y2Q3ZTliNmE1NWRmZSIsInVzZXJuYW1lIjoidXNlciJ9LCJpYXQiOjE2NTYzNDM2MDYsImV4cCI6MTY1ODkzNTYwNn0._EPX6gUTsFcHBAXwhYqA8u05zeshA4XPuBMPtJXOrHw"
}
```
Error (status code 400)

```json
{
  "message": "Invalid auth data"
}
```
