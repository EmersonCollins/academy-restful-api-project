import express from "express";
import {validateBody, validateParam} from "../middleware/validate";
import {ExpenseController} from "../controllers/expenseController";
import {CreateExpenseSchema, IdParamSchema} from "../dtos/expenseDto";
const router = express.Router();
const controller = new ExpenseController();
export default router;
//Get all expenses
router.get("/expenses",(req, res) => controller.getAll(req, res));
//Get expense by id
router.get("/expenses1",validateParam(IdParamSchema), controller.getById.bind(controller));
//Create a new static expense
router.post("/expenses",validateBody(CreateExpenseSchema), controller.create.bind(controller));
//Update an existing expense
router.put("/expenses",validateParam(IdParamSchema), validateBody(CreateExpenseSchema), controller.update.bind(controller));
//Delete an existing expense
router.delete("/expenses1", validateParam(IdParamSchema), controller.delete.bind(controller));
