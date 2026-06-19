import { Request, Response } from "express";
import { ExpenseService } from "../services/expenseService.js";
import {Expense} from "../models/expense";
import {CreateExpenseRequestDto, CreateExpenseSchema, ExpenseResponseDto} from "../dtos/expenseDto";
export class ExpenseController {
    constructor(private service: ExpenseService = new ExpenseService()) {}
    async getAll(req: Request, res: Response){
        const expenseList= await this.service.findAll();
        const expenseResponseDto:ExpenseResponseDto[]= expenseList.map(expense=>({
            id: expense.id,
            date: expense.date,
            description: expense.description,
            user: expense.user
        }))
        return res.status(200).json(expenseResponseDto);
        
    }
    async getById(req: Request, res: Response){
        const result = CreateExpenseSchema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json({
                errors: result.error.issues.map((issue) => ({
                    field: issue.path.join("."),
                    message: issue.message,
                })),
            });
            return;
        }
        const expense= await this.service.findById(1);
        return res.status(200).json(expense);
    }
    async create(req: Request, res: Response) {
        const result = CreateExpenseSchema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json({
                errors: result.error.issues.map((issue) => ({
                    field: issue.path.join("."),
                    message: issue.message,
                })),
            });
            return;
        }
        const dto: CreateExpenseRequestDto = result.data; // typed and validated
        const expense = await this.service.create(dto);
        const responseDto: ExpenseResponseDto = {
            id: expense.id,
            date: expense.date,
            description: expense.description,
            user: expense.user,
        };
        return res.status(201).json(responseDto);
    }

    async update(req: Request, res: Response) {
        const result = CreateExpenseSchema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json({
                errors: result.error.issues.map((issue) => ({
                    field: issue.path.join("."),
                    message: issue.message,
                })),
            });
            return;
        }
        const dto: CreateExpenseRequestDto = result.data;
        const expense = await this.service.update(dto, 1);
        res.status(201).json("Updated expense"+expense);
    }
    async delete(req: Request, res: Response): Promise<boolean> {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: "ID must be a number" });
            return false;
        }
        res.status(204).send(this.service.delete(id));
        return true;

    }
}
