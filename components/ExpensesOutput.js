import { View ,StyleSheet} from "react-native"
import { AppColors } from "../constants/Colors";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Fuel for my generator',
        amount: 5000.00,
        date: Date("2021-05-18")
    },
    {
        id: 'e2',
        description: 'Fuel for my cars',
        amount: 20500.00,
        date: Date("2021-05-18")
    },
    {
        id: 'e3',
        description: 'Electricity Bill',
        amount: 15750.00,
        date: Date("2021-05-30")
    },
    {
        id: 'e4',
        description: 'Native wear for Richies wedding',
        amount: 95950.00,
        date: Date("2021-06-02")
    },
    {
        id: 'e5',
        description: 'Italian shoe for Richies wedding',
        amount: 50000.00,
        date: Date("2021-06-04")
    },
    {
        id: 'e6',
        description: 'Shaving beards',
        amount: 3000.00,
        date: Date("2021-06-07")
    }
]

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
        backgroundColor: AppColors.colors.accentColor,
        // flex: 1,
    }
});