import { Request, Response } from "express";
import { ExpenseService } from "../services/expenseService.js";
export class ExpenseController {
    constructor(private service: ExpenseService = new ExpenseService()) {}

    async getAll(req: Request, res: Response): Promise<any[]> {
        return this.service.findAll();

    }
    async getById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: "ID must be a number" });
            return;
        }
        const expense = await this.service.findById(id);
        if (!expense) {
            res.status(404).json({ error: "expense not found" });
            return;
        }
        res.status(200).json(expense);
    }
    async create(req: Request, res: Response): Promise<void> {
        return this.service.create(this.service);
    }
    async update(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        return this.service.update(id);
    }
    async delete(req: Request, res: Response): Promise<void> {
        const expense = Number(req.params.string);
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: "ID must be a number" });
            return;
        }
        return this.service.delete(expense,id);
        res.status(204).send();
    }
}
