import { View } from "react-native"
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";


export default function ExpenseOutput(){
    return (
        <View>
            <ExpensesSummary />
            <ExpensesList/>
        </View>
    );
};