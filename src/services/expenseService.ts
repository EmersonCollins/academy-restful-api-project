
const mockExpenses: any[] = [
    { id: 1, expense: 5},
    { id: 2, expense: 23},
];
export class ExpenseService {
    async findAll(): Promise<any[]> {
        return mockExpenses;
    }
    async findById(id: number): Promise<any> {
        return mockExpenses.find(p => p.id = id);
    }
    async create(expense: any): Promise<any> {
        return mockExpenses.push(mockExpenses.length-1, expense);
    }
    async update(id: any): Promise<any> {
        if(mockExpenses.find(p => p.id === id)) {
            delete mockExpenses[id];
            return true;
        }
        return
    }
    async delete(expense: any,id: number): Promise<any> {
        if(mockExpenses.find(p => p.id === id)) {
            mockExpenses[id] = expense;
            return true;
        }
        return false;
    }
}
