import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);
app.use(express.json());

app.use("/api/home", (req, res) => {
    res.send("Funciona");
})

export default app;
