import axios from "axios";

const BACKEND_URL = "https://react-native-db-4b9ca-default-rtdb.firebaseio.com"

export async function storeExpense(expeneData) {
    const response = await axios.post(
        BACKEND_URL + "/expense.json",
        expeneData
    );

    const id = response.data.name; // name is what firebase chose to call there id
    return id;
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
        expenses.push(expenseObj);

        return expenses;
    }
}

export  function updateExpenses(id, expenseData) {
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpenses(id) {
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}