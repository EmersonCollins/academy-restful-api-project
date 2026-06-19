export interface ExpenseResponseDto {
    id: number;
    date: string;
    description: string;
    user: string;
}

export interface CreateExpenseResponseDto {
    date: string;
    description: string;
    user: string;
}