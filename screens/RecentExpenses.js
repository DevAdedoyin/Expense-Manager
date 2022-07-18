import {
    Text, View
} from "react-native";
import ExpenseOutput from "../components/ExpensesOutput";


export default function RecentExpenses() {
    return (<View>
        <ExpenseOutput expensesPeriod="Last few days"/>
    </View>);
}