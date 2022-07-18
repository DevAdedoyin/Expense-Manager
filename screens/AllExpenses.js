import {
    Text, View
} from "react-native";
import ExpenseOutput from "../components/ExpensesOutput";


export default function AllExpenses() {
    return (
        <ExpenseOutput expensesPeriod="Total" />
    );
}