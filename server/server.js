import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
//Setup .env access
dotenv.config();
const PORT = process.env.PORT || 8000;

//Initialize app
const app = express();

//Enable Cors
app.use(cors());

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Logger Middleware
app.use(logger);

//Routes
app.use("/api/posts", posts);

//Error handler
app.use(notFound);
app.use(errorHandler);

//Start app
app.listen(PORT, () => console.log(`Server running on ${PORT}`));