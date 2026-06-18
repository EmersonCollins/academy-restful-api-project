import express from "express";
const router = express.Router();
router.get("/expenses", (req, res) => {
   // GET /expenses
});
router.post("/expenses", (req, res) => {
    // POST /expenses
});
router.put("/expenses/:id", (req, res) => {
    // PUT /expenses
})
router.delete("/expenses/:id", (req, res) => {
    // DELETE /expenses
})

export default router;

//GET METHODS
//Get all the expenses
router.get("/expenses", (req, res) => {
    const posts = [
        { id: 1, title: "Getting Started", content: " .", author: "Alice" }
    ];
    res.status(200).json(posts);
});

//Get a specific expense by id
router.get("/expenses/:id", (req, res) => {
    const { id } = req.params;
    const post = {title: "Expense: #",id: Number(id),};
    if (!post) {
        return res.status(404).json({ error: "Expense not found" });
    }
    res.status(200).json(post);
});

//POST METHOD
//Create a new static expense
router.post("/expenses", (req, res) => {
    const { expense} = req.body;
    //save to database here
    const newExpense = {
        id: 1,
        expense,
    };
    res.status(201).json(newExpense);
});

//PUT METHOD
//Update an existing expense
router.put("/expenses/:id", (req, res) => {
    const { id } = req.params;
    const {expense} = req.body;
    //replace in database here
    const updated = { id: Number(id),expense};
    res.status(200).json(updated);
});


//DELETE METHOD
//Delete an existing expense
router.delete("/expenses/:id", (req, res) => {
    const { id } = req.params;
    //delete from database here
    res.status(204).send();
});