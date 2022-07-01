import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  const expenseForm = (
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  );

  const displayForm = () => {
    setExpense(expenseForm);
  };
  const expenseBtn = <button onClick={displayForm}>Add New Expense</button>;
  const [expense, setExpense] = useState(expenseBtn);

  return <div className="new-expense">{expense}</div>;
};

export default NewExpense;
