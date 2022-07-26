import { useContext, useLayoutEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import AppButton from "../components/Button";
import ErrorIndicator from "../components/ErrorIndicator";
import ExpenseForm from "../components/ExpenseManagerForm/ExpenseForm";
import IconButton from "../components/IconButton";
import LoadingIndicator from "../components/LoadingIndicator";
import { AppColors } from "../constants/Colors";
import {
  deleteExpenses,
  storeExpense,
  updateExpenses,
} from "../networking/http";
import { ExpenseManager } from "../state/ExpenseManager";

export default function ManageExpenses({ route, navigation }) {
  const expenseCtx = useContext(ExpenseManager);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const [isSubmitting, setIsSubmitting] = useState();
  const [error, setError] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function cancelHandler() {
    navigation.goBack();
  }

  const expenseData = expenseCtx.expenses.find(
    (expense) => expense.id === expenseId
  );

  async function confirmHandler(expenseData) {
    setIsSubmitting(true);
    if (isEditing) {
      expenseCtx.updateExpenses(expenseData, expenseId);
      await updateExpenses(expenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expenseCtx.addExpenses({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  async function deleteHandler() {
    setIsSubmitting(true);
    try {
      await deleteExpenses(expenseId);
      expenseCtx.deleteExpenses(expenseId);
      navigation.goBack();
    } catch (error) {
      setError("Could not delete expense - Please try again later.");
      setIsSubmitting(false);
    }
  }

  if (error && !isSubmitting) {
    return <ErrorIndicator message={error} />;
  }

  if (isSubmitting) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.body}>
      <ExpenseForm
        onCancel={cancelHandler}
        buttonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        updatableExpense={expenseData}
      />
      {isEditing && (
        <View style={styles.iconContainer}>
          <IconButton
            color="red"
            icon="trash"
            size={30}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: AppColors.colors.primaryColor,
    padding: 20,
  },

  iconContainer: {
    flexDirection: "row",
    // alignContent: 'center',
    justifyContent: "center",
    borderTopColor: "white",
    borderTopWidth: 2,
    marginTop: 20,
    paddingTop: 10,
  },
});
