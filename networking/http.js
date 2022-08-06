import axios from "axios";

const BACKEND_URL = "https://react-native-db-4b9ca-default-rtdb.firebaseio.com"

export function storeExpense(expeneData) {
    axios.post(
        BACKEND_URL + "/expense.json",
        expeneData
    );
}

export async function retrieveExpense() {
    const response = await axios.get(
       BACKEND_URL + "/expense.json"
    )

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expense.push(expenseObj);

        return expenses;
    }


}