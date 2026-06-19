import express from "express";
import expenseRouter from "./routes/expenseRouter";
export const app = express();
const PORT = 3000;
// Middleware
app.use(express.json());
app.use("/api", expenseRouter);
