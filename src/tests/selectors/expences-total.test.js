import selectExpensesTotal from "../../selectors/expenses-total"
import expenses from "../fixtures/expenses"

test("should return 0 when no items found", () => {
    const res = selectExpensesTotal([])
    expect(res).toBe(0);
})

test("should return 150 when first expense only is found", () => {
    const res = selectExpensesTotal([expenses[0]])
    expect(res).toBe(1.50);
})

test("should return 114150 when all expenses are found", () => {
    const res = selectExpensesTotal(expenses)
    expect(res).toBe(1141.50)
})