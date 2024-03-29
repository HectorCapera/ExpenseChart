import { GlobalProvider } from "./context/GlobalState";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/transactions/IncomeExpenses";
import ExpenseChart from "./components/transactions/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-neutral-950 text-white h-screen flex justify-center items-center">
        <div className="w-2/5 flex justify-center items-center">
          <div className="bg-neutral-800 p-10 rounded-md w-full">
            <Header />
            <div className="text-4xl font-bold"> Expense Tracker</div>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className="flex-1 flex flex-col">
                <ExpenseChart />
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}
export default App;
