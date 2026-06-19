import { describe, it, expect } from "vitest";
import {ExpenseService} from "../../src/services/expenseService";
describe("ExpenseService", () => {
    // Group related tests
    it("should return all expenses", async () => {
        // Arrange — set up
        const service = new ExpenseService();
        // Act — run the code
        const result = await service.findAll();
        // Assert — check the outcome
        expect(result).toBeInstanceOf(Array);
    });
    it("should return expenses", async () => {
        // Arrange — set up
        const service = new ExpenseService();
        // Act — run the code
        const result = await service.findAll();
        // Assert — check the outcome
        expect(result.length>1);
    });
});