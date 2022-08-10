import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpensesItem";

export function rederedExpense(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={rederedExpense}
      keyExtractor={(item) => item.id}
    />
  );
}
