import {z} from "zod";
import {Expense} from "../models/expense";
export interface ExpenseResponseDto{
    id: number;
    date: string;
    description: string;
    user: string;
}

export interface CreateExpenseRequestDto{
    date: string;
    description: string;
    user: string;
}

export const CreateExpenseSchema = z.object({
    date: z.string().min(1, "Date cannot be empty"),
    description: z.string().min(1, "Description cannot be empty"),
    user: z.string().min(1, "User cannot be empty"),
})

export const IdParamSchema = z.object({
    id: z.coerce.number().min(1, "ID cannot be empty"),
})