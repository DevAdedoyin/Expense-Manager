import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Fuel for my generator",
    amount: 5000.0,
    date: new Date("2021-05-18"),
  },
  {
    id: "e2",
    description: "Fuel for my cars",
    amount: 20500.0,
    date: new Date("2021-05-18"),
  },
  {
    id: "e3",
    description: "Electricity Bill",
    amount: 15750.0,
    date: new Date("2021-05-30"),
  },
  {
    id: "e4",
    description: "Native wear for Richies wedding",
    amount: 95950.0,
    date: new Date("2021-06-02"),
  },
  {
    id: "e5",
    description: "Italian shoe for Richies wedding",
    amount: 50000.0,
    date: new Date("2021-06-04"),
  },
  {
    id: "e6",
    description: "Shaving beards",
    amount: 3000.0,
    date: new Date("2021-06-07"),
  },
  {
    id: "e7",
    description: "House Rent",
    amount: 500000.0,
    date: new Date("2021-05-19"),
  },
  {
    id: "e8",
    description: "Groceries",
    amount: 50500.0,
    date: new Date("2021-06-20"),
  },
  {
    id: "e9",
    description: "Feeding motherless home",
    amount: 300000.0,
    date: new Date("2021-05-31"),
  },
  {
    id: "e10",
    description: "Internet Subscription",
    amount: 20000.0,
    date: new Date("2021-06-01"),
  },
  {
    id: "e11",
    description: "DSTV subscription",
    amount: 19000.0,
    date: new Date("2021-06-04"),
  },
  {
    id: "e12",
    description: "Birthday Items",
    amount: 200000.0,
    date: new Date("2021-06-19"),
  },
];

export const ExpenseManager = createContext({
  expenses: [],
  setExpenses: () => {},
  addExpenses: () => {},
  updateExpenses: () => {},
  deleteExpenses: () => {},
});

function expenseReducer(state = [], action) {
  switch (action.type) {
    case "ADD":
      // const id = new Date().toString() + Math.random().toString();
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      const expenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[expenseIndex];
      const newExpense = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[expenseIndex] = newExpense;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload.id);
    default:
      return state;
  }
}

export default function ExpenseProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expenseReducer, []);

  function addExpenses(expenseData) {
    dispatch({
      type: "ADD",
      payload: expenseData,
    });
  }

  function setExpenses(expenses) {
    dispatch({
      type: "SET",  
      payload: expenses,
    });
  }

  function deleteExpenses(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  function updateExpenses(expenseData, id) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expenseState,
    addExpenses: addExpenses,
    setExpenses: setExpenses,
    deleteExpenses: deleteExpenses,
    updateExpenses: updateExpenses,
  };

  return (
    <ExpenseManager.Provider value={value}>{children}</ExpenseManager.Provider>
  );
}
