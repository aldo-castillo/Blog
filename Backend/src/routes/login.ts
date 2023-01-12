import express, { Request, Response } from "express"

export let login = express.Router();

const username = "testuser"
const password = "123456"

const userCredentials = [
    {
        username: 'user1',
        password: 'password1'
    },
    {
        username: 'user2',
        password: 'password2'
    }
];

login.get('/', (req: Request, res: Response) => {
    let p_username = req.body.username;
    let p_password = req.body.password;

    if (p_username == username && p_password == password) {
        res.send({
            ok: true,
            message: "Login successful"
        })
    } else {
        res.send({
            ok: false,
            message: "Username or password incorrect"
        })
    }
})
