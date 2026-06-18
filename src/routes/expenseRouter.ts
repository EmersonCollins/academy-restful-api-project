import express from "express";
const router = express.Router();
export default router;

//GET METHODS
//Get all the expenses
router.get("/expenses", (req, res) => {
    const expense = [
        { id: 1, expense: "Garbage"}
    ];
    res.status(200).json({message:"First fill"});
});

//Get a specific expense by id
router.get("/expenses/:id", (req, res) => {
    const { id } = req.params;
    const expense = {expense: "Expense: #",id: Number(id),};
    if (!expense) {
        return res.status(404).json({ error: "Expense not found" });
    }
    res.status(200).json({message:"second fill"}/**expense*/);
});

//POST METHOD
//Create a new static expense
router.post("/expenses", (req, res) => {
    /**const { expense} = req.body;
    //save to database here
    const newExpense = {
        id: 1,
        expense,
    };*/
    res.status(201).json({code:201,message: "Created"}/**newExpense*/);
});

//PUT METHOD
//Update an existing expense
router.put("/expenses/:id", (req, res) => {
    /**const { id } = req.params;
    const {expense} = req.body;
    //replace in database here
    const updated = { id: Number(id),expense};*/
    res.json({error: 200, message: "OK"});
});


//DELETE METHOD
//Delete an existing expense
router.delete("/expenses/:id", (req, res) => {
    //const { id } = req.params;
    //delete from database here
    res.json({error: 204, message: "No Content"});
});