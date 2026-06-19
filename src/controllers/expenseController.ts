import { Request, Response } from "express";
import { ExpenseService } from "../services/expenseService.js";
import {Expense} from "../models/expense";
export class ExpenseController {
    constructor(private service: ExpenseService = new ExpenseService()) {

    }

    async getAll(req: Request, res: Response): Promise<Expense[]> {
        res.json({res});
        return this.service.findAll();
    }
    async getById(req: Request, res: Response): Promise<Expense|undefined> {
        const id = Number(req.params.id);
        return this.service.findById(id);
    }
    async create(req: Request, res: Response): Promise<Expense|undefined> {
        const Expense = await this.service.create(req.body);
        return this.service.create(Expense);
    }
    async update(req: Request, res: Response): Promise<Expense|undefined> {
        const id = Number(req.params.id);
        return this.service.update(req, id);
    }
    async delete(req: Request, res: Response): Promise<boolean> {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: "ID must be a number" });
            return false;
        }
        return this.service.delete(id);
        res.status(204).send();
    }
}
