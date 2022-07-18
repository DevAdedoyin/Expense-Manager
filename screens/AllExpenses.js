import {
    Text, View
} from "react-native";
import ExpenseOutput from "../components/ExpensesOutput";


export default function AllExpenses() {
    return (<View>
        <ExpenseOutput expensesPeriod="Total"/>
    </View>);
}