import { useContext } from "react";
import {
    Text, View
} from "react-native";
import ExpenseOutput from "../components/ExpensesOutput";
import { ExpenseManager } from "../state/ExpenseManager";

function getRecentDate(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export default function RecentExpenses() {
    const expenseCtx = useContext(ExpenseManager);

    const recentExpCtx = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        const recentDate = getRecentDate(today, 7);
        return (expense.date >= recentDate) && (expense.date <= today);
    });

    return (
        <ExpenseOutput expenses={recentExpCtx} expensesPeriod="Last 7 days" fallbackText="No Registered Expense(s) in the last 7 days"/>
    );
}