import express from "express";
import cors from 'cors';
import { adminRouter } from "./utils/Routes/AdminRoute.js";
import { UserRouter } from "./utils/Routes/UserRoute.js";

const app = express()
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT','DELETE'],
    credentials: true
}))
app.use(express.json())
app.use('/auth',adminRouter)
app.use('/user', UserRouter)
app.use(express.static('Public'))

app.listen(3000, () => {
    console.log("Server is running")
}) 