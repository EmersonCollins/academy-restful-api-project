import express from "express";
import {ExpenseController} from "../controllers/expenseController";
const router = express.Router();
const controller = new ExpenseController();
export default router;


//GET METHODS
//Get all expenses
router.get("/",     (req, res) => controller.getAll(req, res));

//Get expense by id
router.get("/:id",  (req, res) => controller.getById(req, res));
//Create a new static expense
router.post("/",    (req, res) => controller.create(req, res));
//Update an existing expense
router.put("/:id",  (req, res) => controller.update(req, res));
//Delete an existing expense
router.delete("/:id", (req, res) => controller.delete(req, res));
