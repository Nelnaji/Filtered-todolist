import "./expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card";

function Expenses({ depense }) {
  return (
    <div>
      <Card className="expenses">
        <ExpenseItem depenseItem={depense[0]}></ExpenseItem>
        <ExpenseItem depenseItem={depense[1]}></ExpenseItem>
        <ExpenseItem depenseItem={depense[2]}></ExpenseItem>
        <ExpenseItem depenseItem={depense[3]}></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
