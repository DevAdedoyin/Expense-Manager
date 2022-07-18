import { FlatList, Text } from "react-native";


export function rederedExpense(itemData) {
    return <Text>{itemData.item.description}</Text>
}

export default function ExpensesList({ expenses }) {
    return (
        <FlatList data={expenses} renderItem={rederedExpense} keyExtractor={(item) => item.id} />
    )
}