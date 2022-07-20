import { View ,StyleSheet} from "react-native"
import { AppColors } from "../constants/Colors";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";




export default function ExpenseOutput({ expenses, expensesPeriod }){
    return (
        <View style={styles.outputContainer}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} expensesPeriod={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    );
};

const styles = StyleSheet.create({
    outputContainer: {
        flex: 1,
        backgroundColor: AppColors.colors.primaryColor,
        paddingHorizontal: 20,
    }
});