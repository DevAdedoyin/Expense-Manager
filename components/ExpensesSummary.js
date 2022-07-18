import { View, Text } from "react-native";


export default function ExpensesSummary({ expenses, expensesPeriod }) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);
    return (
        <View>
            <View>
                <Text>{expensesPeriod}</Text>
            </View>
            <View>
                <Text>₦{expensesSum.toFixed(2)}</Text>
            </View>
        </View>
    );
}