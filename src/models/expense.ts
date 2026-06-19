export class Expense{
    constructor(
        public readonly id: number,
        public readonly date: string,
        public readonly description: string,
        public readonly user: string)
    {
        if (id!>0) throw new Error("ID must be a positive number");
        if (!date.trim() || !description.trim() || !user.trim()) throw new Error("Fields cannot be empty");

    }
}