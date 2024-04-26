import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRoutes from './src/routes/user.routes.js';
import postRoutes from './src/routes/post.routes.js';
import commentRoutes from './src/routes/comment.routes.js';

const app = express();

app.use(
    cors({
        credentials: true,
        origin: "*" //process.env.FRONTEND_URL
    })
);
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", commentRoutes);
app.use("/api", postRoutes);

export default app;
