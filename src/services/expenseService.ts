import {Expense} from "../models/expense";
import {CreateExpenseResponseDto} from "../dtos/expenseDto";
const mockExpenses: Expense[] = [
    { id: 1, date: "dat1", description: "desc1",user: "user2"},
    { id: 2, date: "dat2", description: "desc2",user: "user2"}
];
export class ExpenseService {
    async findAll(): Promise<Expense[]> {
        return mockExpenses;
    }
    async findById(id: number): Promise<Expense|undefined> {
        return mockExpenses[id];
    }
    async create(data: CreateExpenseResponseDto): Promise<Expense> {

        mockExpenses.push(new Expense(mockExpenses.length-1,data.description,data.user,data.date));
        return mockExpenses[mockExpenses.length-1];
    }
    async update(data: CreateExpenseResponseDto,id: number): Promise<Expense|undefined> {
        mockExpenses[id] = new Expense(id, data.description, data.user, data.date);
        return mockExpenses[id];
    }
    async delete(id: number): Promise<boolean> {
        if(mockExpenses.find(p => p.id === id)) {
            delete mockExpenses[id];
            return true;
        }
        return false;
    }
}
