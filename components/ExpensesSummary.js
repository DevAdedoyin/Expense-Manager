import { View, Text, StyleSheet } from "react-native";
import { AppColors } from "../constants/Colors";


export default function ExpensesSummary({ expenses, expensesPeriod }) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);
    return (
        <View style={styles.summaryContainer}>
            <Text style={styles.periodStyle} >{expensesPeriod}</Text>        
            <Text style={styles.sumStyle} >₦{expensesSum.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: AppColors.colors.summarBgColor,
        padding: 10,
    },
    periodStyle: {
        color: AppColors.colors.textColorSecondary,
        fontSize: 14,
    },
    sumStyle: {
        color: AppColors.colors.textColorSecondary,
        fontSize: 18,
        fontWeight: 'bold'
    }
});