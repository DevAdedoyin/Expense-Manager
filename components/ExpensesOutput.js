import { View ,StyleSheet} from "react-native"
import { AppColors } from "../constants/Colors";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Fuel for my generator',
        amount: 5000.00,
        date:new Date("2021-05-18")
    },
    {
        id: 'e2',
        description: 'Fuel for my cars',
        amount: 20500.00,
        date:new Date("2021-05-18")
    },
    {
        id: 'e3',
        description: 'Electricity Bill',
        amount: 15750.00,
        date:new Date("2021-05-30")
    },
    {
        id: 'e4',
        description: 'Native wear for Richies wedding',
        amount: 95950.00,
        date:new Date("2021-06-02")
    },
    {
        id: 'e5',
        description: 'Italian shoe for Richies wedding',
        amount: 50000.00,
        date:new Date("2021-06-04")
    },
    {
        id: 'e6',
        description: 'Shaving beards',
        amount: 3000.00,
        date:new Date("2021-06-07")
    },
    {
        id: 'e7',
        description: 'House Rent',
        amount: 500000.00,
        date:new Date("2021-05-19")
    },
    {
        id: 'e8',
        description: 'Groceries',
        amount: 50500.00,
        date:new Date("2021-06-20")
    },
    {
        id: 'e9',
        description: 'Feeding motherless home',
        amount: 300000.00,
        date:new Date("2021-05-31")
    },
    {
        id: 'e10',
        description: 'Internet Subscription',
        amount: 20000.00,
        date:new Date("2021-06-01")
    },
    {
        id: 'e11',
        description: 'DSTV subscription',
        amount: 19000.00,
        date: new Date("2021-06-04")
    },
    {
        id: 'e12',
        description: 'Birthday Items',
        amount: 200000.00,
        date:new Date("2021-06-19")
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
        flex: 1,
        backgroundColor: AppColors.colors.primaryColor,
        paddingHorizontal: 20,
    }
});