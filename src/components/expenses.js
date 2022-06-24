import "./expenses.css";
import ExpenseItem from "./ExpenseItem.js";

function Expenses({ depense }) {
  return (
    <div>
      <div className="expenses">
        <ExpenseItem depenseItem={depense[0]}></ExpenseItem>
        <ExpenseItem depenseItem={depense[1]}></ExpenseItem>
        <ExpenseItem depenseItem={depense[2]}></ExpenseItem>
        <ExpenseItem depenseItem={depense[3]}></ExpenseItem>
      </div>
    </div>
  );
}

export default Expenses;
