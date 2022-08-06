import { useContext } from "react";
import ErrorIndicator from "../components/ErrorIndicator";
import ExpenseOutput from "../components/ExpensesOutput";
import LoadingIndicator from "../components/LoadingIndicator";
import { retrieveExpense } from "../networking/http";
import { ExpenseManager } from "../state/ExpenseManager";

function getRecentDate(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export default function RecentExpenses() {
    const [isFetched, setIsFetched] = useState(true);
    const [error, setError] = useState();
    const expenseCtx = useContext(ExpenseManager);

    useEffect(() => {
        async function getExpenses() {
            setIsFetched(true);
            try {
                const expenses = await retrieveExpense();
                expenseCtx.setExpenses(expenses);
            } catch (error) {
                setError("Could not set expenses!!!");
            }  
            setIsFetched(false);
      }
        getExpenses();
    }, []);

   

    if (error && !isFetched) {
        return <ErrorIndicator message={error} />;
    }

    if (isFetched) {
        return <LoadingIndicator/>
    }
    

    const recentExpCtx = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        const recentDate = getRecentDate(today, 7);
        return (expense.date >= recentDate) && (expense.date <= today);
    });

    return (
        <ExpenseOutput expenses={recentExpCtx} expensesPeriod="Last 7 days" fallbackText="No Registered Expense(s) in the last 7 days"/>
    );
}