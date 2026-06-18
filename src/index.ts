import express from "express";
import postRouter from "./routes/expenseRouter";
const app = express();
const PORT = 3000;
// Middleware
app.use(express.json());
// Root endpoint
app.get("/", (req, res) => {
    res.json({ message: "Welcome to your API!" });
});
// Health check
app.get("/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
});
// Start localhost server on port 3000
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📝 Try: http://localhost:${PORT}/health`);
});
 