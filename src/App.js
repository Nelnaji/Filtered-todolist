import React, { useState } from "react";
import Expenses from "./components/Expenses/expenses.js";
import NewExpense from "./components/newExpense/NewExpense.js";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 12),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 13) },
  { id: "e3", title: "New wheel", amount: 99.49, date: new Date(2022, 5, 9) },
  {
    id: "e4",
    title: "New Robot Cleaner",
    amount: 199.49,
    date: new Date(2020, 3, 24),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses(() => {
      return [expense, ...expenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses depense={expenses} />
    </div>
  );
}

export default App;
