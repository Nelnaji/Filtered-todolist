import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [expense, setExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setExpense(false);
  };
  const displayForm = () => {
    setExpense(true);
  };
  const expenseBtn = <button onClick={displayForm}>Add New Expense</button>;

  const cancelExpense = () => {
    setExpense(false);
  };

  return (
    <div className="new-expense">
      {!expense && expenseBtn}
      {expense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelBtnProp={cancelExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
