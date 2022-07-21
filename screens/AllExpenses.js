import { useContext } from "react";
import {
    Text, View
} from "react-native";
import ExpenseOutput from "../components/ExpensesOutput";
import { ExpenseManager } from "../state/ExpenseManager";


export default function AllExpenses() {
     const expenseCtx = useContext(ExpenseManager);
    return (
        <ExpenseOutput expenses={expenseCtx.expenses} expensesPeriod="Total" fallbackText="No Registered Expense(s)" />
    );
}