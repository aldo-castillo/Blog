import express, { Express, Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { login } from './routes/login'

let app: Express = express();

const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/login", require("./routes/login"))
app.use("/login", login)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
