import { View } from "react-native";


export default function ExpensesSummary({ expenses, expensesDescription }) {
    const expensesSummary = expenses.reduce(({}))
    return (
        <View>
            <View>
                <Text>{expensesDescription}</Text>
            </View>
            <View>
                <Text>{expensesSummary}</Text>
            </View>
        </View>
    );
}