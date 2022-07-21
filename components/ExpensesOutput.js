import { useContext } from "react";
import { View ,StyleSheet, Text} from "react-native"
import { AppColors } from "../constants/Colors";
import { ExpenseManager } from "../state/ExpenseManager";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";




export default function ExpenseOutput({ expenses, expensesPeriod, fallbackText }) {

    let content = (<View style={styles.fallbackTextContainer}>
        <Text style={styles.fallbackText}>{fallbackText}</Text>
    </View>);
    
    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses}/>
    }

    return (
        <View style={styles.outputContainer}>
            <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    outputContainer: {
        flex: 1,
        backgroundColor: AppColors.colors.primaryColor,
        paddingHorizontal: 20,
    },
    fallbackText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '700'
    },
    fallbackTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        color:AppColors.colors.summarBgColor
    }
});